# Pasta de Imagens

Mova todas as imagens de `src/assets/` para `public/images/`

## Uso

```tsx
import Image from "next/image";

// Antes (Vite)
import heroImage from "@/assets/hero-image.jpg";
<img src={heroImage} alt="Hero" />

// Depois (Next.js)
<Image 
  src="/images/hero-image.jpg" 
  alt="Hero"
  width={1920}
  height={1080}
  priority
/>
```

## Otimização

- Use `priority` para imagens above the fold
- Use `loading="lazy"` para imagens below the fold
- Especifique sempre width e height para evitar layout shift
