import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:5
    },
    image:{
        height:75,
        aspectRatio:16/9,
        resizeMode:'cover',
        borderRadius:5
    },
    title:{
        color:'white',
    },
    duration:{
        color:'darkgrey',
    },
    plot:{
        color:'darkgrey',
    },
    titleContainer:{
        flex:1,
        justifyContent:'center',
        padding:5,
    }
    
});


export default styles;