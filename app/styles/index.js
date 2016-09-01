const styles = { 
  bodyContainer: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    margin: 'auto'
  },
  bodyHeader: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
  },
  bodyBox:{
    maxWidth: 300,
    textAlign: 'center',
  },
  header: {
    width: '100%',
    height: '100%'
  },
  headerStyle:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: 5
  },
  headerInput:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  },
  forecastContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    margin: 'auto',
    textAlign: 'center'
  },
  forecastHeader:{
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    marginTop: 50,
    marginBottom: 30
  },
  forecastSubHeader:{
    fontSize: 30,
    color: '#333',
    fontWeight: 100,
  },
  displayWeather:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: 50,
  },
  weatherBox:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center'
  }

}

export default styles