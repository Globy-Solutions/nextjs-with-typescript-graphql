import { useEffect, useState } from 'react'
import { Layout } from 'components/'

const arrTabs = [
  {
    id: 'pictures',
    icon: 'image',
  },
  {
    id: 'music',
    icon: 'music',
  },
]

const Index = ({ loading }: { loading: boolean }) => {
  const [tabs, setTabs] = useState<NodeListOf<HTMLLIElement>>();
  const [tabsContent, setTabsContent] = useState<NodeListOf<HTMLDivElement>>();

  const getIndex = (el: Element) => [...el.parentElement.children].indexOf(el);

  useEffect(() => {
    setTabs(document.querySelectorAll('.tabs li'));
    setTabsContent(document.querySelectorAll('.tab-content'))
  }, [])

  const deactvateAllTabs = (): void => {
    tabs.forEach((tab: Element): void => {
      tab.classList.remove('is-active')
    })
  }

  const hideTabsContent = () => {
    tabsContent.forEach((tabContent) => {
      tabContent.classList.remove('is-active');
      tabContent.style.display = 'none'
    })
  }

  const activateTabsContent = (tab: Element): void => {
    const content = tabsContent[getIndex(tab)];
    content.classList.add('is-active');
    content.style.display = 'block'
  }

  useEffect(() => {
    (async () => {
      if (tabs && tabs.length > 0) {
        tabs.forEach((tab) => {
          tab.addEventListener('click', () => {
            deactvateAllTabs();
            hideTabsContent();
            tab.classList.add('is-active');
            activateTabsContent(tab);
            console.log(tab.id)
          })
        });
        tabs[0].click()
      }
    })()
  }, [tabs])

  return (
    <Layout loading={loading}>
      <nav className="tabs is-boxed is-fullwidth is-large">
        <ul>
          {
            arrTabs.map(({ id, icon }, index: number) => (<li className={`tab ${index === 0 ? 'is-active' : ''}`} key={id} id={id}><a><i className={`fa fa-${icon}`} /> {id.toUpperCase()}</a></li>))
          }
        </ul>
      </nav>

      <div className="container section">
        {
          arrTabs.map(({ id }, index) => (
            <div id={`content-${id}`} className={`tab-content ${index === 0 ? 'is-active' : ''}`} key={id} style={{display: 'none'}}>
              <h3>{id.toUpperCase()}</h3>
              <p>Overview Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default Index
