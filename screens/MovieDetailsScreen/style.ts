
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    image:{
        width:'100%',
        aspectRatio:16/9,
        resizeMode:'cover'
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    } ,
    match:{
        color:"#59d467",
        fontWeight:'bold',
        marginRight:5
    },
    year:{
        color:'#757575',
        marginHorizontal:5
    },
    ageContainer:{
        backgroundColor:'#e6e229',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:2,
        paddingHorizontal:3,
        fontWeight:'bold',
        marginRight:5,
    },
    age:{
        color:'black',
        fontWeight:'bold'
    },
    downloadButton:{
         backgroundColor:'#2b2b2b',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        borderRadius:3,
        marginVertical:5

    },
    downloadButtonText:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
    },
    plyaButton:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        borderRadius:3,
        marginVertical:5
    },
    playButtonText:{
        color:'black',
        fontSize:18,
        fontWeight:'bold',
    }
});


export default styles;