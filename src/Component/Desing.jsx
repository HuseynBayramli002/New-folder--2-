import Logo from "/Logo.svg"
const Desing = () => {
    return (
        <div className="ml-10 flex gap-3 relative">
            <div className="w-[3px] h-[314px] bg-white"></div>
            <div className="w-[2px] h-[407px] bg-white "></div>
            <div className="mt-10 ml-5">
                <div>
                    <img src={Logo} alt="" />
                </div>
                <p className="mt-[10px] mb-[30px] text-sm text-white">Suni intelekt sistemi</p>
                <p className=" text-white w-60 text-sm ">Bu formu doldurduqdan sonra öz yaşıdlarınız arasında ən yaxşı hansı faizlikdə olduğunuzu müəyyən edə biləcəksiniz.</p>
            <div className=" absolute w-60 bottom-24 left-60">
                <img src="/komp.svg" alt="" />
            </div>
            </div>
        </div>
    )
}


export default Desing