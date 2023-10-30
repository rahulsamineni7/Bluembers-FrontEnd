import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from "./CategoryCard"

const Categories = () => {
  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal:10,
        paddingTop:10,
    }} 
    horizontal
    showsHorizontalScrollIndicator={false}
    >
        <CategoryCard imgUrl="https://fullofplants.com/wp-content/uploads/2021/05/easy-virgin-mojito-alcohol-free-kid-friendly-refreshing-drink-thumb.jpg " title="Mojito"/>
        <CategoryCard imgUrl="https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=1600&h=1066&q=medium " title="Burger"/>
        <CategoryCard imgUrl="https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg " title="Fries"/>
        <CategoryCard imgUrl="https://c.ndtvimg.com/2021-09/10cgsus8_tacos_625x300_09_September_21.jpg " title="Tacos"/>
        <CategoryCard imgUrl="https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Strips.jpg " title="Strips"/>
        <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyR_H4qGLEws3RiuFVNIJ5iu0YFPlLiuJ2NA&usqp=CAU" title="Wraps"/>
        <CategoryCard imgUrl="https://airfryingfoodie.com/wp-content/uploads/2021/02/Air-Fryer-Brownie-.jpg" title="Ice Cream"/>
    </ScrollView>
  )
}

export default Categories