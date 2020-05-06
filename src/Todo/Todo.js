import React, {useState} from 'react';
import { View, ScrollView,Button,Text, TextInput, StyleSheet } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export const Todo = () => {
    const [todo,setTodo] = useState('');
    const store= useSelector((store) =>{
        return store;
    });
    const dispatch = useDispatch();
    return(
        <ScrollView style={styles.scrollView}>
            <View style={{alignItems:'center'}}>
                <TextInput 
                    style={styles.list}
                    placeholder="Enter Todo"
                    value = {todo}
                    onChangeText={(text) =>{
                        setTodo(text);
                        // console.log(text);
                    }}
                />
                <View  style={styles.btn}>

                    <Button color="salmon" title="Add" onPress ={ () => {
                        dispatch({
                            type:'Add',
                            payload: {
                                name: todo,
                                status: false,
                            },
                        });
                        setTodo('');
                    }}/>
                </View>

                {store.map((item,index) => {
                    return(
                        <View style={{
                            borderColor: item.status ? 'green' : 'red',
                            flex:1,
                            margin:5,
                            padding:10,
                            borderWidth:1,
                            borderRadius :5,
                            flexDirection:'row',
                            width:300,
                            justifyContent:'space-between',
                            }} >
                            
                            <Button 
                            title={item.name} onPress ={ () => {
                                dispatch({
                                    type:'Mark',
                                    payload:index,
                                });
                            }}/>
                            <Button title="Delete" onPress ={ () => {
                                dispatch({
                                    type:'Delete',
                                    payload:index,
                                });
                            }}/>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
       
    );
};
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: 'white',
      },
      list: {
        width:'65%',
        fontSize: 25,
        color:'black',
        backgroundColor:'white',
        borderBottomColor:'black',
        borderBottomWidth:2,
    },
    btn: {
        padding:15,
    },
});