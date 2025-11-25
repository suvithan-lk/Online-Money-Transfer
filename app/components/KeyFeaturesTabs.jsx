'use client'

import { useState } from 'react'

export default function KeyFeaturesTabs() {
  const [activeTab, setActiveTab] = useState('security')

  const tabs = [
    { id: 'security', label: 'Security' },
    { id: 'cost', label: 'Cost' },
    { id: 'speed', label: 'Speed' },
    { id: 'accessibility', label: 'Accessibility' },
  ]

  const tabContent = {
    security: {
      paragraphs: [
        'Quisque velit nisi, pretium ut lacinia in, elementum id enim. vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. pretium ut lacinia in, elementum id enim.',
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. pellentesque in ipsum id orci porta dapibus. curabitur non nulla sit amet nisl tempus convallis quis ac lectus. quisque velit nisi elementum id enim.',
      ],
      listItems: [
        'Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
        'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet.',
        'Donec rutrum congue leo eget malesuada.',
        'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
      ],
    },
    cost: {
      paragraphs: [
        'Quisque velit nisi, pretium ut lacinia in, elementum id enim. vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. pretium ut lacinia in, elementum id enim.',
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. pellentesque in ipsum id orci porta dapibus. curabitur non nulla sit amet nisl tempus convallis quis ac lectus. quisque velit nisi elementum id enim.',
      ],
      listItems: [
        'Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
        'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet.',
        'Donec rutrum congue leo eget malesuada.',
        'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
      ],
    },
    speed: {
      paragraphs: [
        'Quisque velit nisi, pretium ut lacinia in, elementum id enim. vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. pretium ut lacinia in, elementum id enim.',
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. pellentesque in ipsum id orci porta dapibus. curabitur non nulla sit amet nisl tempus convallis quis ac lectus. quisque velit nisi elementum id enim.',
      ],
      listItems: [
        'Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
        'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet.',
        'Donec rutrum congue leo eget malesuada.',
        'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
      ],
    },
    accessibility: {
      paragraphs: [
        'Quisque velit nisi, pretium ut lacinia in, elementum id enim. vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. pretium ut lacinia in, elementum id enim.',
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. pellentesque in ipsum id orci porta dapibus. curabitur non nulla sit amet nisl tempus convallis quis ac lectus. quisque velit nisi elementum id enim.',
      ],
      listItems: [
        'Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
        'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet.',
        'Donec rutrum congue leo eget malesuada.',
        'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
      ],
    },
  }

  return (
    <div className="ctp-key-features-tabs">
      <ul className="nav nav-tabs" role="tablist">
        {tabs.map((tab) => (
          <li key={tab.id} className="nav-item">
            <button
              className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              type="button"
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content" id="myTabContent">
        {tabs.map((tab) => {
          const tabData = tabContent[tab.id]
          return (
            <div
              key={tab.id}
              className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
              role="tabpanel"
            >
              <div className="row justify-content-center">
                <div className="col-lg-5 col-md-12">
                  <div className="ctp-key-features-image"></div>
                </div>
                <div className="col-lg-7 col-md-12">
                  <div className="ctp-key-features-content">
                    {tabData.paragraphs.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                    <ul className="list">
                      {tabData.listItems.map((item, idx) => (
                        <li key={idx}>
                          <i className="fa-solid fa-check"></i> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

