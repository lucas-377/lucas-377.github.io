export function SectionSkeleton() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block h-8 w-32 bg-muted rounded-full animate-pulse mb-6" />
          <div className="h-12 w-96 bg-muted rounded-lg animate-pulse mx-auto mb-6" />
          <div className="h-6 w-[600px] bg-muted rounded-lg animate-pulse mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-64 bg-muted rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  )
}
