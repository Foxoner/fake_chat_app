import React, { Component } from 'react';
import Dialogs from '../Dialogs/Dialogs';
import ListOfMessage from '../ListOfMessage/ListOfMessage';
import Signin from '../Signin/Signin';
import Register from '../Register/Register';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import './Home.scss';


let dialogs_db = [
        {
            id: 1,
            user: {
                fullname: 'Robofriend',
                avatar: 'https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg'
            },
            message: {
                text: 'Some random text...',
                updated_at: new Date()
            }
        },
        {
            id: 2,
            user: {
                fullname: 'My Friend',
                avatar: 'https://static1.clickandboat.com/v1/home/m/O4S2LGzNE4HkypdvKjInSQ9xiYWdEWqn.jpg'
            },
            message: {
                text: 'Some 14569875555 random text...',
                updated_at: new Date()
            }
        },
        {
            id: 3,
            user: {
                fullname: "Nieves Ingram",
                avatar: "https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg"
            },
            message: {
                text: "Aliqua esse occaecat consequat non dolore et. Et officia qui aliquip cupidatat mollit ipsum id nisi. Ad id cupidatat irure quis commodo velit occaecat ut enim quis laboris aute.",
                updated_at: new Date()
            }
        },
        {
            id: 4,
            user: {
                fullname: "Alisa Mcknight",
                avatar: "https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg"
            },
            message: {
                text: "Minim laborum ad in elit irure deserunt. Pariatur commodo nulla amet ad consequat nostrud esse cupidatat enim consectetur est excepteur. Reprehenderit amet veniam ullamco voluptate amet do sint aute consequat sit est esse.",
                updated_at: new Date()
            }
        },
        {
            id: 5,
            user: {
                fullname: "Perez Macias",
                avatar: "https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg"
            },
            message: {
                text: "Consectetur id anim do labore occaecat officia quis enim culpa ea consequat. Mollit elit voluptate occaecat dolore. Excepteur incididunt consequat voluptate et et ipsum consectetur Lorem officia in laborum velit id.",
                updated_at: new Date()
            }
        },
        {
            id: 6,
            user: {
                fullname: "Miller Oconnor",
                avatar: "https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg"
            },
            message: {
                text: "Nisi dolore enim incididunt quis id culpa enim excepteur exercitation. Mollit aliquip excepteur nisi ullamco consequat duis. Sint ut velit aliquip mollit fugiat incididunt ut occaecat cillum velit excepteur sit dolor enim.",
                updated_at: new Date()
            }
        },
        {
            
            id: 7,
            user: {
                fullname: "Paula Baldwin",
                avatar: "https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg"
            },
            message: {
                text: "Nisi ea ipsum nisi laborum sunt fugiat eu laboris exercitation. Quis et commodo anim duis. Mollit sint elit elit commodo exercitation elit ad exercitation aute esse occaecat.",
                updated_at: new Date()
            }
        }
    ]

let messages_db = [
    {
        dialog_id: 1,
        avatar: 'https://static1.clickandboat.com/v1/home/m/O4S2LGzNE4HkypdvKjInSQ9xiYWdEWqn.jpg',
        text: 'Hello, how are you?',
        date: new Date(),
        unread: true,
        isMe: true
    },
    {
        dialog_id: 1,
        avatar: 'https://static1.clickandboat.com/v1/home/m/O4S2LGzNE4HkypdvKjInSQ9xiYWdEWqn.jpg',
        text: 'I`m fine and how are you?',
        date: new Date(),
        unread: true,
        isMe: false
    },
    {
        dialog_id: 2,
        avatar: 'https://static1.clickandboat.com/v1/home/m/O4S2LGzNE4HkypdvKjInSQ9xiYWdEWqn.jpg',
        text: 'Hello, world!!!',
        date: new Date(),
        unread: true,
        isMe: true
    },
    {
        dialog_id: 2,
        avatar: 'https://static1.clickandboat.com/v1/home/m/O4S2LGzNE4HkypdvKjInSQ9xiYWdEWqn.jpg',
        text: 'Hello, Uniwerse!!!!',
        date: new Date(),
        unread: true,
        isMe: false
    },
]

const initialState = {
            searchfield: '',
            dialogs: [],
            messages: [],
            id: 0,
            avatar: '',
            fullname: '',
            route: 'home',
            isSignedIn: false,
            user: {
                id: '',
                name: '',
                email: ''
                // entries: 0,
                // joined: ''
              }
        }

class Home extends Component {
    constructor() {
        super();
        this.state = initialState;
    }

    loadUser = (data) => {
        this.setState({user: {
            id: data.id,
            name: data.name,
            email: data.email
            /*entries: data.entries,
        joined: data.joined*/}})
    }

    onRouteChange = (route) => {
        if (route === 'signout'){
          this.setState(initialState)
        } else if (route === 'home') {
          this.setState({isSignedIn: true})
        }
        this.setState({route: route})
    }

    componentDidMount() {
		this.updateDialogs()
	}

    updateDialogs = () => {
        fetch('https://fake-chat-ap.herokuapp.com/get_dialogs')
		.then(response => response.json())
		.then(dialogs => {
            const sortDialogs = dialogs.sort((a,b) => a.updated_at > b.updated_at ? 1 : -1).reverse()
            this.setState({ dialogs: sortDialogs })
        })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }


    onClickFunc = (id, avatar, fullname) => {
        const filtredMessages = [];
        fetch('https://fake-chat-ap.herokuapp.com/get_messages')
		.then(response => response.json())
		.then(messages => {
            messages.filter(message => {
                if (id == message.dialog_id) {
                    filtredMessages.push(message) 
                }
            })
            this.setState({ messages: filtredMessages,
                            id: id,
                            avatar: avatar,
                            fullname: fullname });
        })
    }

    respChukNorris = () => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(text => {
            fetch('https://fake-chat-ap.herokuapp.com/send_message', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                },
                body: JSON.stringify({
                    dialog_id: this.state.id,
                    avatar: this.state.avatar,
                    text: text.value,
                    unread: false,
                    isme: false
                })
            })
            .then(response => response.json())
            .catch(console.log)
        })
        .catch(err => console.log('error', err));
    }

    sendMessage = (event) => {
        if (event.which === 13 && event.target.value.length > 0) {
            fetch('https://fake-chat-ap.herokuapp.com/send_message', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  },
                body: JSON.stringify({
                    dialog_id: this.state.id,
                    // avatar: '',
                    text: event.target.value,
                    unread: false,
                    isme: true
                })
            })
            .then(response => response.json())
            .then(trigger => {
                setTimeout(() => this.onClickFunc(this.state.id, this.state.avatar), 100)
                setTimeout(this.updateDialogs, 500)
                event.target.value = ''
                setTimeout(() => {
                    this.respChukNorris()
                    if (trigger === 'Success') {
                    setTimeout(()=> this.onClickFunc(this.state.id, this.state.avatar), 400)
                    setTimeout(this.updateDialogs, 1200)
                    }
                }, 10000)
            })
        } 
    }


    render() {
        const filtredDialogs = this.state.dialogs.filter(dialog => {
                     return dialog.fullname.toLowerCase().includes(this.state.searchfield.toLowerCase())
                    })

        

        return (
            <section className='Home'>
                { this.state.route === 'home' ?
                    <div className='chat'>
                        <div className='chat_sidebar'>
                            <div className='chat_sidebar_header'>
                                <div className='chat_sidebar_header_top'>
                                    <img src='https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg' alt='Icon or img' />
                                    <p onClick={() => this.onRouteChange('signin')}>Log Out</p>
                                </div>
                                <div className='chat_sidebar_search'>
                                    <input className='' type='search' placeholder='Search or start new chat' onChange={this.onSearchChange} />
                                </div>
                            </div>
                            <div className='chat_sidebar_dialogs'>
                                <h3>Chats</h3>
                                    <Dialogs className='dialogs' items={filtredDialogs} onClickFunc={this.onClickFunc} />
                            </div>  
                        </div>
                        <div className='chat_dialog'>
                            <div className='chat_dialog_header'>
                                <img src={this.state.avatar || 'https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg'} alt='Avatar'/>
                                <b className='chat_dialog_header_username'>{this.state.fullname || ''}</b>
                            </div>
                            <div className='chat_dialog_messages'>
                                <ListOfMessage items={this.state.messages} />   
                            </div>
                            <div className='chat_dialog_input'>
                                <input placeholder='Type your message and press Enter' onKeyPress={this.sendMessage}/>
                            </div>
                        </div>
                    </div>
                    : (
                        this.state.route === 'signin' ?
                        <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                        :
                        <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                        )
                    }
            </section>
        )
    }
}

export default Home;