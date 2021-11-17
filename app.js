const App = {
  data() {
    return {
      placeholderString: "Add task text",
      title: 'Task list',
      inputValue: '',
      notes: ['1 Note', '2 Note'],
    }
  },
  methods: {
    addNewNote() {
      if(this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    removeNote(index) {
      this.notes.splice(index, 1)
    },
    toUpperCase(item) {
      return item.toUpperCase()
    },
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2
    }
  },
  watch: {
    inputValue(value) {

    }
  }
};

Vue.createApp(App).mount('#app')

