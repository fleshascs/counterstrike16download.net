export function Row({ children }) {
  return <div className='p-6 flex flex-col lg:flex-row lg:space-x-4 pb-14'>{children}</div>;
}

export function Col({ children }) {
  return <div className='basis-1/2'>{children}</div>;
}
