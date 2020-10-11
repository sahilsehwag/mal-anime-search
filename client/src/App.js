import React, {
	useEffect,
} from 'react'

import {
	useSelector,
} from 'react-redux'

import Loader from 'react-loader-spinner'
import {
	ToastContainer,
	toast,
} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Routes from 'routes'

const App = () => {
	const error   = useSelector(state => state.common.error)
	const loading = useSelector(state => state.common.loading)

	useEffect(() => {
		if (error !== null)
			toast.error(error.message)
	}, [error])

	return (
		<>
			<Routes/>
			<Loader 
				className="loader"
				type="TailSpin"
				color="hsla(197,100%,20%,1.0)"
				height={100}
				width={100}
				visible={loading}
			/>
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				pauseOnHover
			/>
			{loading && <div className="overlay"></div>}
		</>
	)
}

export default App