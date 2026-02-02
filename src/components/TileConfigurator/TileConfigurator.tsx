import React, { useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  ContactShadows,
  Box,
  Plane,
  Html
} from '@react-three/drei';
import { Mesh, Vector3, Color, DoubleSide, MeshStandardMaterial } from 'three';
import * as THREE from 'three';

// Interface für Fliesen-Typen
interface TileType {
  id: string;
  name: string;
  color: string;
  description: string;
}

// Interface für Raum-Bereiche
interface TileableArea {
  id: string;
  name: string;
  position: Vector3;
  rotation: Vector3;
  scale: Vector3;
  surface: 'wall' | 'floor';
}

// Vordefinierte Fliesen-Optionen
const TILE_TYPES: TileType[] = [
  { id: 'classic-white', name: 'Classic White', color: '#f8f8f8', description: 'Zeitlos elegante weiße Keramikfliesen' },
  { id: 'marble-grey', name: 'Marble Grey', color: '#d4d4d4', description: 'Luxuriöse graue Marmorfliesen' },
  { id: 'subway-beige', name: 'Subway Beige', color: '#e8d7c3', description: 'Moderne beige U-Bahn-Fliesen' },
  { id: 'mosaic-blue', name: 'Mosaic Blue', color: '#4a90a4', description: 'Stilvolle blaue Mosaikfliesen' },
  { id: 'wood-look-brown', name: 'Wood Look', color: '#8b4513', description: 'Warme braune Holzoptik-Fliesen' },
  { id: 'black-matt', name: 'Black Matt', color: '#2c2c2c', description: 'Elegante matte schwarze Fliesen' }
];

// Fliesbare Bereiche
const TILEABLE_AREAS: TileableArea[] = [
  { id: 'back-wall', name: 'Rückwand', position: new Vector3(0, 1, -2), rotation: new Vector3(0, 0, 0), scale: new Vector3(4, 2, 1), surface: 'wall' },
  { id: 'left-wall', name: 'Linke Wand', position: new Vector3(-2, 1, 0), rotation: new Vector3(0, Math.PI/2, 0), scale: new Vector3(4, 2, 1), surface: 'wall' },
  { id: 'right-wall', name: 'Rechte Wand', position: new Vector3(2, 1, 0), rotation: new Vector3(0, -Math.PI/2, 0), scale: new Vector3(4, 2, 1), surface: 'wall' },
  { id: 'floor', name: 'Boden', position: new Vector3(0, 0, 0), rotation: new Vector3(-Math.PI/2, 0, 0), scale: new Vector3(4, 4, 1), surface: 'floor' }
];

// Fliesen-Oberfläche Komponente
interface TileSurfaceProps {
  area: TileableArea;
  tileType: TileType;
  isSelected: boolean;
  onSelect: (areaId: string) => void;
}

const TileSurface: React.FC<TileSurfaceProps> = ({ area, tileType, isSelected, onSelect }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current && isSelected) {
      const material = meshRef.current.material as MeshStandardMaterial;
      if (material.emissive) {
        material.emissive = new Color(0x444444).multiplyScalar(
          0.5 + 0.3 * Math.sin(state.clock.elapsedTime * 3)
        );
      }
    }
  });

  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    
    ctx.fillStyle = tileType.color;
    ctx.fillRect(0, 0, 256, 256);
    
    ctx.strokeStyle = '#00000020';
    ctx.lineWidth = 2;
    
    if (tileType.id.includes('subway')) {
      for (let y = 0; y < 256; y += 64) {
        for (let x = 0; x < 256; x += 128) {
          ctx.strokeRect(x, y, 128, 64);
        }
      }
    } else if (tileType.id.includes('mosaic')) {
      for (let y = 0; y < 256; y += 32) {
        for (let x = 0; x < 256; x += 32) {
          ctx.strokeRect(x, y, 32, 32);
        }
      }
    } else {
      for (let y = 0; y < 256; y += 64) {
        for (let x = 0; x < 256; x += 64) {
          ctx.strokeRect(x, y, 64, 64);
        }
      }
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(area.surface === 'floor' ? 6 : 4, area.surface === 'floor' ? 6 : 4);
    
    return texture;
  }, [tileType, area.surface]);

  return (
    <Plane
      ref={meshRef}
      args={[area.scale.x, area.scale.y]}
      position={[area.position.x, area.position.y, area.position.z]}
      rotation={[area.rotation.x, area.rotation.y, area.rotation.z]}
      onClick={() => onSelect(area.id)}
      onPointerOver={() => { document.body.style.cursor = 'pointer'; }}
      onPointerOut={() => { document.body.style.cursor = 'auto'; }}
    >
      <meshStandardMaterial map={texture} color={tileType.color} side={DoubleSide} roughness={0.3} metalness={0.1} />
    </Plane>
  );
};

// Badezimmer-Fixtures
const BathroomFixtures: React.FC = () => (
  <group>
    <Box args={[1.5, 0.6, 0.8]} position={[-1.2, 0.3, -1.5]}>
      <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.8} />
    </Box>
    <Box args={[0.8, 0.1, 0.5]} position={[1.2, 0.9, -1.7]}>
      <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.8} />
    </Box>
    <Box args={[0.01, 0.8, 0.6]} position={[1.2, 1.4, -1.95]}>
      <meshStandardMaterial color="#87ceeb" roughness={0} metalness={1} />
    </Box>
    <Box args={[0.4, 0.4, 0.6]} position={[1.5, 0.2, 0.5]}>
      <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.8} />
    </Box>
  </group>
);

// Styles als CSS-in-JS Objekte
const styles = {
  container: {
    width: '100%',
    height: '600px',
    position: 'relative' as const,
    borderRadius: '16px',
    overflow: 'hidden',
  },
  panel: {
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    minWidth: '280px',
    maxWidth: '320px',
  },
  panelTitle: { margin: '0 0 5px 0', color: '#2c3e50', fontSize: '1.3em', fontWeight: 'bold' as const },
  panelSubtitle: { margin: '0 0 15px 0', color: '#7f8c8d', fontSize: '0.9em' },
  selectedArea: { background: '#3498db', color: 'white', padding: '8px 12px', borderRadius: '6px', marginBottom: '15px' },
  tileGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginBottom: '15px' },
  tileOption: (isSelected: boolean, color: string) => ({
    padding: '12px 8px',
    borderRadius: '8px',
    cursor: 'pointer',
    border: isSelected ? '2px solid #3498db' : '2px solid transparent',
    backgroundColor: color,
    textAlign: 'center' as const,
    transition: 'all 0.2s ease',
    boxShadow: isSelected ? '0 0 0 3px rgba(52, 152, 219, 0.2)' : 'none',
  }),
  tileName: { background: 'rgba(0, 0, 0, 0.7)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75em', fontWeight: 500 },
  description: { background: '#ecf0f1', padding: '10px', borderRadius: '6px', marginBottom: '15px' },
  instructions: { borderTop: '1px solid #bdc3c7', paddingTop: '12px', color: '#7f8c8d', fontSize: '0.8em' },
};

// UI-Panel
interface TileSelectionPanelProps {
  selectedTileType: TileType;
  onTileTypeChange: (tileType: TileType) => void;
  selectedArea: string | null;
}

const TileSelectionPanel: React.FC<TileSelectionPanelProps> = ({ selectedTileType, onTileTypeChange, selectedArea }) => (
  <Html position={[3, 2, 0]} distanceFactor={8}>
    <div style={styles.panel}>
      <div>
        <h3 style={styles.panelTitle}>🎨 Fliesen Konfigurator</h3>
        <p style={styles.panelSubtitle}>KNY - Ihr Fliesenspezialist</p>
      </div>
      
      {selectedArea && (
        <div style={styles.selectedArea}>
          <h4 style={{ margin: 0, fontSize: '0.95em' }}>
            ✓ Ausgewählt: {TILEABLE_AREAS.find(a => a.id === selectedArea)?.name}
          </h4>
        </div>
      )}
      
      <div>
        <h4 style={{ margin: '0 0 12px 0', color: '#2c3e50', fontSize: '1em' }}>Fliesen auswählen:</h4>
        <div style={styles.tileGrid}>
          {TILE_TYPES.map((tile) => (
            <div
              key={tile.id}
              style={styles.tileOption(selectedTileType.id === tile.id, tile.color)}
              onClick={() => onTileTypeChange(tile)}
            >
              <span style={styles.tileName}>{tile.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div style={styles.description}>
        <p style={{ margin: 0, color: '#2c3e50', fontSize: '0.9em', lineHeight: 1.4 }}>
          {selectedTileType.description}
        </p>
      </div>
      
      <div style={styles.instructions}>
        <p style={{ margin: '3px 0' }}>💡 Klicken Sie auf eine Oberfläche</p>
        <p style={{ margin: '3px 0' }}>🎨 Wählen Sie dann eine Fliese aus</p>
        <p style={{ margin: '3px 0' }}>🔄 Ziehen Sie zum Drehen der Ansicht</p>
      </div>
    </div>
  </Html>
);

// Hauptkomponente
export const TileConfigurator: React.FC = () => {
  const [selectedTileType, setSelectedTileType] = useState<TileType>(TILE_TYPES[0]);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [areaTiles, setAreaTiles] = useState<Record<string, TileType>>({});

  const handleAreaSelect = (areaId: string) => {
    setSelectedArea(areaId);
    setAreaTiles(prev => ({ ...prev, [areaId]: selectedTileType }));
  };

  return (
    <div style={styles.container}>
      <Canvas
        camera={{ position: [5, 3, 5], fov: 50, near: 0.1, far: 1000 }}
        gl={{ antialias: true }}
        style={{ background: 'linear-gradient(to bottom, #87ceeb, #ffffff)' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[0, 3, 0]} intensity={0.5} />

        <group>
          {TILEABLE_AREAS.map(area => (
            <TileSurface
              key={area.id}
              area={area}
              tileType={areaTiles[area.id] || TILE_TYPES[0]}
              isSelected={selectedArea === area.id}
              onSelect={handleAreaSelect}
            />
          ))}
          <BathroomFixtures />
        </group>

        <ContactShadows position={[0, 0, 0]} opacity={0.3} scale={8} blur={2} far={4} />
        <Environment preset="apartment" />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} minDistance={3} maxDistance={15} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 6} />
        <TileSelectionPanel selectedTileType={selectedTileType} onTileTypeChange={setSelectedTileType} selectedArea={selectedArea} />
      </Canvas>
    </div>
  );
};

export default TileConfigurator;
