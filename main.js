function setLanguage(lang) {
    document.getElementById('language-selection').style.display = 'none';
    document.getElementById('content').classList.remove('hidden');
    
    if (lang === 'es') {
        document.getElementById('headTitle').innerText = 'Servicio de detallado de vehículos a domicilio en el área de Conroe altamente calificado';
        document.getElementById('headTitle2').innerText = 'IPA Detailing se dedica a proporcionar servicios de lavado y detallado de autos de alta calidad que destacan la verdadera belleza de cada vehículo. Con una pasión por la perfección y un ojo para el detalle, nos esforzamos por ofrecer resultados excepcionales que superen las expectativas de nuestros clientes.';
        document.getElementById('headTitle3').innerText = 'Lavado Premium - $60/65*';
        document.getElementById('combo1Text').innerHTML = '<li>Lavado a mano completo</li><li>Limpiar ruedas y neumáticos</li><li>Lavado con espuma</li><li>Limpiar ventanas exteriores</li><li>Vestido de neumáticos</li><li>ambas de puertas</li><li>Secado con toalla y soplador de aire</li><li>Cera en spray premium sellada para hasta 30 días de protección</li><li>Vestidura de todos los adornos y plásticos exteriores</li>';
        //document.getElementById('headTitle4').innerText = 'Lavado y Cera - $120/140*';
        //document.getElementById('combo2Text').innerHTML = '<li>Lavado a mano completo</li><li>Limpiar ruedas y neumáticos</li><li>Lavado con espuma</li><li>Descontaminación de hierro</li><li>Exfoliación con barra de arcilla</li><li>Limpiar ventanas exteriores</li><li>Vestido de neumáticos</li><li>ambas de puertas</li><li>Cera en spray cerámica</li><li>Vestidura de todos los adornos y molduras exteriores</li>';
        document.getElementById('headTitle5').innerText = 'Detalle Interior y Exterior Completo - $180*';
        document.getElementById('combo3Text').innerHTML = '<li>Aspirado completo del interior</li><li>Limpiar a fondo paneles de puertas, adornos, plásticos, tablero, consola central, etc...</li><li>Shampoo de asientos, alfombras y tapetes</li><li>Extracción de agua caliente</li><li>Limpiar a fondo asientos y superficies de cuero</li><li>Aplicar acondicionador de cuero</li><li>Aplicar protección UV en adornos y plásticos interiores</li><li>Vidrios y ventanas interiores sin rayas</li>';
        document.getElementById('headTitle6').innerText = 'Detalle Interior Mini - $50*';
        document.getElementById('combo4Text').innerHTML = '<li>Aspirado completo del interior</li><li>Limpiar polvo y escombros ligeros en superficies</li><li>Aplicar protección UV en adornos y plásticos interiores</li><li>Vidrios y ventanas interiores sin rayas</li>';
        document.getElementById('titleContact').innerText = 'Ponte en Contacto';
        document.getElementById('ownerContact').innerText = 'Israel Amador, Propietario';
        document.getElementById('socialContact').innerHTML = 'Síguenos en instagram: <a href="https://www.instagram.com/ipa_detailing18/">ipa_detailing</a>';
    } else {
        document.getElementById('headTitle').innerText = 'Highly-rated mobile vehicle detailing service in the Conroe area.';
        document.getElementById('headTitle2').innerText = 'IPA Detailing is dedicated to providing top-quality car washing and detailing services that highlight the true beauty of each vehicle. With a passion for perfection and an eye for detail, we strive to deliver exceptional results that exceed our customers\' expectations.';
        document.getElementById('headTitle3').innerText = 'Premium Wash - $60/65*';
        document.getElementById('combo1Text').innerHTML = '<li>Completed Hand Wash</li><li>Clean Wheels & Tires</li><li>Foam Wash</li><li>Clean outside windows</li><li>Tires dressing</li><li>Door Jambs</li><li>Towel dry and Air blower</li><li>Premium Spray Wax sealed for up to 30 days of protection</li><li>Dress all exterior trims & plastic</li>';
        // document.getElementById('headTitle4').innerText = 'Wash & Wax - $120/140*';
        //document.getElementById('combo2Text').innerHTML = '<li>Completed Hand Wash</li><li>Clean Wheels & Tires</li><li>Foam Wash</li><li>Iron Decontamination</li><li>Clay Bar Exfoliation</li><li>Clean outside windows</li><li>Tires dressing</li><li>Door Jambs</li><li>Ceramic Spray Wax</li><li>All exterior trims and Molding dressed</li>';
        document.getElementById('headTitle5').innerText = 'Full Interior and Exterior Detail - $180*';
        document.getElementById('combo3Text').innerHTML = '<li>Thorough vacuum of the entire interior</li><li>Deep clean door panels, trims, plastics, dashboard, center console, etc...</li><li>Shampoo Seats, Carpet, and Floor Mats</li><li>Hot Water Extraction</li><li>Deep clean leather seats and surface</li><li>Apply Leather Conditioning</li><li>Apply UV protection on interior trims and plastics</li><li>Streak-Free interior glass and windows</li>';
        document.getElementById('headTitle6').innerText = 'Mini-Interior Detail - $50*';
        document.getElementById('combo4Text').innerHTML = '<li>Thorough vacuum of the entire interior</li><li>Wipe down light dust and debris on surfaces</li><li>Apply UV protection on interior trims and plastics</li><li>Streak-Free interior glass and windows</li>';
        document.getElementById('titleContact').innerText = 'Get In Touch';
        document.getElementById('ownerContact').innerText = 'Israel Amador, Owner';
        document.getElementById('socialContact').innerHTML = 'Follow us on instagram: <a href="https://www.instagram.com/ipa_detailing18/">ipa_detailing</a>';
    }
}
