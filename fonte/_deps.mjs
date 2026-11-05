// Ferramentas que só o pipeline do prédio usa (o site não precisa delas). Instale uma vez, quando for refazer o prédio:
//   npm i -D -E sharp@0.35.5 @gltf-transform/cli@4.5.1 ffmpeg-static@5.3.0
const COMO = 'npm i -D -E sharp@0.35.5 @gltf-transform/cli@4.5.1 ffmpeg-static@5.3.0';

export async function precisa(nome) {
  try {
    const m = await import(nome);
    return m.default ?? m;
  } catch {
    console.error(`\nFalta a ferramenta "${nome}". Rode uma vez, na pasta do site:\n  ${COMO}\n`);
    process.exit(1);
  }
}

/** pasta de saída dos renders do Blender (fonte/render), relativa a este arquivo */
export const RENDER = new URL('./render/', import.meta.url).pathname;
export const PUBLIC = new URL('../public/', import.meta.url).pathname;
