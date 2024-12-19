
export function CardsGrid({ cards }) {

  return (

    <div className="[perspective:1000px] transform-style-[preserve-3d] gridSection grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] p-[2rem] md:gap-[8rem]  md:p-[8rem] ">

      {cards.map((card, index) => (

        <div className="displayCard  p-[1rem]  flex flex-col justify-center relative" key={card.title}>

          <h1 className=' md:text-[1.35rem] classy  tracking-[.15rem]  font-extrabold  mb-4'>{card.title}</h1>
          <div className='flex justify-center items-center '>
            <img className=' peer  rounded-[6px] aspect-[9/16] object-cover' src={card.src} />
            <div className="hoveredCard w-0 h-0 rounded-lg absolute   peer-hover:z-20 bg-black"></div>

          </div>

        </div>

      ))}


    </div>

  );
}
