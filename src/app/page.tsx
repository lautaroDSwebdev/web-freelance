import { ToastContainer } from "react-toastify";
import {
  AboutMe,
  Footer,
  Form,
  Header,
  NavBar,
  Projects,
  Services,
  ServicesTimeLine,
} from "./_component";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <AboutMe></AboutMe>
      <ServicesTimeLine></ServicesTimeLine>
      <Projects></Projects>
      <Form></Form>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
