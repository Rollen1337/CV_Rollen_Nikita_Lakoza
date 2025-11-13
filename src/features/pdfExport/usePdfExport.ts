import { useCallback, useState } from 'react'

type PdfState = {
  url: string | null
  isProcessing: boolean
}

const initialState: PdfState = {
  url: null,
  isProcessing: false,
}

export const usePdfExport = () => {
  const [state, setState] = useState<PdfState>(initialState)

  const exportToPdf = useCallback(() => {
    if (!state.url) {
      if (import.meta.env.DEV) {
        console.info('PDF export is not yet implemented. Connect the generator to enable this control.')
      }
      setState((current) => ({ ...current, isProcessing: false }))
      return
    }

    window.open(state.url, '_blank', 'noopener')
  }, [state.url])

  const startProcessing = useCallback(() => {
    setState((current) => ({ ...current, isProcessing: true }))
  }, [])

  const resetPdfUrl = useCallback(() => setState(initialState), [])

  const setPdfUrl = useCallback((url: string) => {
    setState({ url, isProcessing: false })
  }, [])

  return {
    exportToPdf,
    pdfUrl: state.url,
    isReady: Boolean(state.url),
    isProcessing: state.isProcessing,
    setPdfUrl,
    startProcessing,
    resetPdfUrl,
  }
}
