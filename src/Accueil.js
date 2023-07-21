import React from 'react'
import Header from './component/Comp/Header'
import Categorie_Cours from './component/Comp/Categorie_Cours'
import Stat from './component/Comp/Stat'
import Prix from './component/Comp/Prix'
import Service from './component/Comp/Service'
import Teacher from './component/Comp/Teacher'
import Footer from './component/Comp/Footer'
export default function Accueil() {
	return (
		<>
			<Header />
			<Categorie_Cours />
			<Stat />
			<h1 style={ { textAlign: "center" } } id="titreprix"> Nos prix </h1>
			<Prix />
			<Service />
			<Teacher />
			<Footer />

		</>
	)
}
