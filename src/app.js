

class TodoList extends  React.Component {
    constructor(){
        super();
        this.state = {
            value: '',
            todoList: [ {
                id: 1,
                title : 'Сделать кофе',
                checked: false
            },
            {
                id: 2,
                title: 'Побегать',
                checked: false
            }
            ],
            styleCheckbox: {textDecoration: 'none'}
        }
    }

    addItem = () => {
        let newItems = this.state.todoList;

        newItems.unshift({
            id: this.state.todoList.length + 1,
            title: this.state.value,
            checked: false
        })

        this.setState({
            todoList: newItems
        })
    };



    onsubmit = (e) => {
        e.preventDefault()// Почитай про это
        console.log('submitted');

        this.addItem()
    };

    onChangeInput =(e) => {
        console.log(e.target.value)
        this.setState({
            value: e.target.value
        })
    };

    onChangeCheckBox = (e, item) => {




        console.log(item)

    }

    render() {
        console.log('ITEMS', this.state.todoList)
        return (
            <div>
                <h1>Todo-list</h1>
                <form action="" onSubmit={this.onsubmit}>
                    <div className="title">
                        <label>Title</label>
                        <input type="text" placeholder="Title" className="input" onChange={this.onChangeInput} value={this.state.value}/>

                    </div>
                </form>

                <div className="content">
                    {
                        this.state.todoList.map((item) => {
                            return (
                                <div>
                                    <input type="checkbox" onChange={this.onChangeCheckBox.bind(item.id, item)} id={item.id} />
                                    <label htmlFor={item.id} style={item.id ? { textDecoration : 'line-through' }: {textDecoration:'none'}}>{item.title}</label>
                                    <input type="button" value="Delete" style={{float: 'right'}}/>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="cont2">

                </div>
            </div>

        )
    }
}

ReactDOM.render(
    <TodoList />,
    document.getElementById('root')
)




