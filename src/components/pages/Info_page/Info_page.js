import './Info_page.scss'
const React = require('react')
const CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup')
const AriaMenuButton = require('react-aria-menubutton')

const people = [
  {
    name: 'Charles Choo-Choo',
    id: 1242,
  },
  {
    name: 'Mina Meowmers',
    id: 8372,
  },
  {
    name: 'Susan Sailor',
    id: 2435,
  },
]

export class Info_Page extends React.Component {
  render() {
    const peopleMenuItems = people.map(function (person, i) {
      return (
        <AriaMenuButton.MenuItem
          key={i}
          tag="li"
          value={person.id}
          text={person.name}
          className="PeopleMenu-person"
        >
          <div className="PeopleMenu-personPhoto">
            <img src={'/people/pictures/' + person.id + '.jpg'} alt="" />
          </div>
          <div className="PeopleMenu-personName">{person.name}</div>
        </AriaMenuButton.MenuItem>
      )
    })

    const peopleMenuInnards = function (menuState) {
      const menu = !menuState.isOpen ? (
        false
      ) : (
        <div className="PeopleMenu-menu" key="menu">
          {peopleMenuItems}
        </div>
      )
      return (
        <CSSTransitionGroup transitionName="people">{menu}</CSSTransitionGroup>
      )
    }

    return (
      <AriaMenuButton.Wrapper
        className="PeopleMenu"
        onSelection={handleSelection}
        style={{ marginTop: 20 }}
      >
        <AriaMenuButton.Button className="PeopleMenu-trigger">
          <span className="PeopleMenu-triggerText">Select a person</span>
          <span className="PeopleMenu-triggerIcon" />
        </AriaMenuButton.Button>
        <AriaMenuButton.Menu>{peopleMenuInnards}</AriaMenuButton.Menu>
      </AriaMenuButton.Wrapper>
    )
  }
}

function handleSelection(value, event) {
  console.log(value)
  console.log(event)
}
