export function Tag({ children }) {
  return (
    <div className='flex justify-end'>
      <h2 className='text-4xl rounded-l-xl border-l-4 border-l-rose-900 bg-[#9d00004d] p-2'>
        {children}
      </h2>
    </div>
  );
}
