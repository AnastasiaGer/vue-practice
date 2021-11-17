Vue.createApp({
data: () => ({
  title: 'I am title',
  myHtml: '<h1>VUE 3<h1/>',
  person: {
    name: 'Ana',
    lastName: 'Ger',
    age: 35
  },
  items: [1,2,3,4,5,6]
})


}).mount('#app')