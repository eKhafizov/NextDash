import '../app/ui/global.css';

export default function Page() {
  return (
    <main>
      <h1 className='flex'> My test page</h1>
      <div className='flex flex-col bg-slate-300 justify-center content-center w-10 h-20 rounded-lg'>
        <span className='flex justify-center content-center m-auto'>1</span>
        <span className='flex justify-center content-center m-auto'>2</span>
        <span className='flex justify-center content-center m-auto'>3</span>
      </div>
    </main>
  );
};
