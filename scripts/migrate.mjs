import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 1. Configurar cliente con el token de escritura
const client = createClient({
  projectId: 'n0k6o0ax',
  dataset: 'production',
  apiVersion: '2024-04-29',
  token: 'skE7er0ISUpdjg9XmDVmhDwEEcdtJyEZLHMB0wjpdDxNtqt48WvU2O7jiXhlMr8Sf8kPv2YjxWclKGnZwyYUvZeSfzAawqYmvfgCXvj8RD1NF0rJNxpGJzj2Kb4AgakgnvDnLb3X5XCV4HGgARrXhAC3l921GaGNE2445OfxZM9YlJwkf4YJ',
  useCdn: false,
})

// 2. Función para subir imagen desde URL a Sanity
async function uploadImage(url) {
  if (!url) return null;
  console.log(`Descargando imagen: ${url}`);
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${url}`);
    const buffer = await response.arrayBuffer();
    
    // Subir a Sanity como un asset
    const asset = await client.assets.upload('image', Buffer.from(buffer), {
      filename: url.split('/').pop() || 'image.png'
    });
    console.log(`Imagen subida: ${asset._id}`);
    return {
      _type: 'image',
      asset: {
        _type: "reference",
        _ref: asset._id
      }
    };
  } catch (error) {
    console.error(`Error subiendo imagen ${url}:`, error.message);
    return null;
  }
}

// 3. Script principal
async function migrate() {
  console.log('Iniciando migración de Projects.json a Sanity...');
  
  const projectsPath = path.join(__dirname, '../data/Projects.json');
  const rawData = fs.readFileSync(projectsPath, 'utf8');
  const projects = JSON.parse(rawData);

  for (const proj of projects) {
    console.log(`\nProcesando: ${proj.Title}`);
    
    let mainImageRef = null;
    let previewImageRef = null;

    if (proj['Main Image']?.url) {
      mainImageRef = await uploadImage(proj['Main Image'].url);
    }
    if (proj['Preview Image']?.url) {
      previewImageRef = await uploadImage(proj['Preview Image'].url);
    }

    // Preparar el documento
    const doc = {
      _type: 'project',
      title: proj.Title,
      slug: {
        _type: 'slug',
        current: proj.Slug
      },
      public: proj.Public !== false,
      year: proj.Year || '',
      client: proj.Client || '',
      category: proj.Category || '',
      location: proj.Location || '',
      introText: proj['Intro Text'] || '',
      myRole: proj['My rol'] || '',
      myGoal: proj['My goal'] || '',
      mainImage: mainImageRef,
      previewImage: previewImageRef,
      // Inicializamos el contenido (Project Core) con un bloque de texto vacío para que sea editable en Studio
      content: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Detalla aquí el proceso completo, retos y resultados...'
            }
          ]
        }
      ]
    };

    try {
      const result = await client.create(doc);
      console.log(`✅ Proyecto Creado en Sanity: ${result.title} (${result._id})`);
    } catch (err) {
      console.error(`❌ Error creando proyecto ${proj.Title}:`, err.message);
    }
  }

  console.log('\n🎉 ¡Migración completada!');
}

migrate();
