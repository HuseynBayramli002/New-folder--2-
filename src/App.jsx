import  Desing  from "./Component/Desing"
import Sidebar from "./Component/Sidebar"
import Content from "./Component/Content"

const App = () => {
  return (
    <div className="flex justify-between">
      <Desing/>

      <div className="flex justify-end mr-[10%] mt-[7%]">
        <Sidebar />
        <div className="w-[575px] flex flex-col">
          <Content/>
        </div>
      </div>
    </div>
  )
}

export default App