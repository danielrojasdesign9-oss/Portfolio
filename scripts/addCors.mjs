import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'n0k6o0ax',
  dataset: 'production',
  apiVersion: '2024-04-29',
  token: 'skE7er0ISUpdjg9XmDVmhDwEEcdtJyEZLHMB0wjpdDxNtqt48WvU2O7jiXhlMr8Sf8kPv2YjxWclKGnZwyYUvZeSfzAawqYmvfgCXvj8RD1NF0rJNxpGJzj2Kb4AgakgnvDnLb3X5XCV4HGgARrXhAC3l921GaGNE2445OfxZM9YlJwkf4YJ',
  useCdn: false,
})

async function addCors() {
  try {
    // El endpoint para CORS en Sanity no está expuesto directamente en el client standard,
    // usamos client.request para golpear la API
    const response = await client.request({
      url: `/cors`,
      method: 'POST',
      body: {
        origin: 'http://localhost:3000',
        allowCredentials: true
      }
    });
    console.log('✅ CORS configurado correctamente para http://localhost:3000');
  } catch (e) {
    console.error('❌ Error configurando CORS:', e.message);
  }
}

addCors();
