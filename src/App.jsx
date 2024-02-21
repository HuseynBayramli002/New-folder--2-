import Footer from "./Component/Footer"
import Form from "./Component/Form"
import Sidebar from "./Component/Sidebar"

const App = () => {
  return (
    <div className="flex justify-end mr-[10%] mt-[7%]">
      <Sidebar />
      <div className="w-[575px] flex flex-col">
        <Form/>
        <Footer/>
      </div>
    </div>
  )
}

export default App