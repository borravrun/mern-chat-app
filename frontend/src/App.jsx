import {Route, Routes} from "react-router";

export default function App() {
    return (
        <Routes>
            <Route index path={'/'} element={<>Hello</>}/>
        </Routes>
    )
}
