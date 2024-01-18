import { resolve } from 'path'

const r = (p: string) => resolve(__dirname, p)
const alias: Record<string, string> = {
  '@base': r('./layers/base'),
  '@test': r('./apps/test'),
}

export default alias
