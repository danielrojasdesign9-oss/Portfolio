'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'
import { useEffect, useState } from 'react'

export function Studio() {
  const [mounted, setMounted] = useState(false)

  // Solo renderizar el Studio después de que el componente se monte en el navegador.
  // Esto evita que Next.js intente correr el código del Studio en el servidor
  // (donde no existe el objeto 'window').
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#111', color: 'white' }}>Cargando Sanity Studio...</div>
  }

  return <NextStudio config={config} />
}
