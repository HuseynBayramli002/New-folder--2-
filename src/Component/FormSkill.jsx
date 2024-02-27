import LineProgresBar from './LineProgresBar'
import ToggleableButton from './ToggleableButton'


const FormSkill = () => {
    return (
        <div className='bg-white p-10 pb-1 rounded-xl w-[575px] h-[616px]'>
            <h2 className="text-emerald-900  text-xl w-fit ml-2 mb-[18px]">
                Xüsusi bacarıqlar
            </h2>
            <LineProgresBar progressBar={100}/>
            <div className='mt-3'>
                <div className='w-[490px] mt-1'>
                    <h2 className='ml-2'>Rəsm bacarığınıza görə əldə etdiyiniz nailiyyəti qeyd edin.*</h2>
                    <ToggleableButton />
                </div>
                <div className='w-[490px] mt-1 '>
                    <h2 className='ml-2'>Musiqi bacarığınıza görə əldə etdiyiniz nailiyyəti qeyd edin.*</h2>

                        <ToggleableButton />
                </div>
                <div className='w-[490px] mt-1'>
                    <h2 className='ml-2'>Rəqs bacarığınıza görə əldə etdiyiniz nailiyyəti qeyd edin.*</h2>
                        <ToggleableButton />
                </div>
                <div className='w-[490px] mt-1'>
                    <h2 className='ml-2'>Yazıçılıq bacarığınıza görə əldə etdiyiniz nailiyyəti qeyd edin.*</h2>
                        <ToggleableButton />
                </div>
            </div>


        </div>
    )
}

export default FormSkill