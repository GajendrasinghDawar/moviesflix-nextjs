export function Footer() {
  return (
    <Container>
      <footer className="flex min-h-full items-center ">
        <div>apis provided by the movieDB</div>
      </footer>
    </Container>
  )
}

function Container({ children }) {
  return (
    <div className="bg-gradient-to-l from-red2 to-red3 min-h-[60px] border-t border-red5 md:flex  md:justify-center px-2 md:px-0">
      <div className="md:w-9/12 w-full px-2 md:px-0">{children}</div>
    </div>
  )
}
