import { ComponentProps } from '@/lib/types/types'
import handleError from '@/lib/utils/errorHandler'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async (): Promise<any> => {},
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 60 * 1000,
      throwOnError: (error: unknown) => {
        handleError(error)
        return false
      },
    },
    mutations: {
      mutationFn: async (): Promise<any> => {},
      onSuccess: () => {},
      onError: (error: unknown) => {
        handleError(error)
      },
    },
  },
})

export default function DefaultQueryProvider({ children }: ComponentProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}
