interface RespReturnType {
  status: number
  message: unknown
}

interface RespMReturnType {
  status: number
  message: {
    message: unknown
  }
}

const resp = (s: number, m: unknown): RespReturnType => ({ status: s, message: m })
const respM = (s: number, m: unknown): RespMReturnType => ({ status: s, message: { message: m } })

export { resp, respM, type RespReturnType, type RespMReturnType }
