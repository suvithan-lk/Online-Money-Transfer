'use client'

import { useState } from 'react'

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'How do I create an account with Luvion?',
      answer: [
        'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. quisque velit nisi, pretium ut lacinia in, elementum id enim.',
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. quisque velit nisi, pretium ut lacinia in, elementum id enim.',
      ],
    },
    {
      question: 'How to send money online?',
      answer: [
        'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. quisque velit nisi, pretium ut lacinia in, elementum id enim.',
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. quisque velit nisi, pretium ut lacinia in, elementum id enim.',
      ],
    },
    {
      question: 'Is my money safe with Luvion?',
      answer: [
        'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. quisque velit nisi, pretium ut lacinia in, elementum id enim.',
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. quisque velit nisi, pretium ut lacinia in, elementum id enim.',
      ],
    },
    {
      question: 'What verification do I need to send money?',
      answer: [
        'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. quisque velit nisi, pretium ut lacinia in, elementum id enim.',
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. quisque velit nisi, pretium ut lacinia in, elementum id enim.',
      ],
    },
    {
      question: 'How does Luvion protect your money?',
      answer: [
        'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. quisque velit nisi, pretium ut lacinia in, elementum id enim.',
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. quisque velit nisi, pretium ut lacinia in, elementum id enim.',
      ],
    },
  ]

  return (
    <div className="ctp-faq-accordion">
      <div className="accordion" id="FaqAccordion">
        {faqs.map((faq, index) => (
          <div key={index} className="accordion-item">
            <button
              className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              {faq.question}
            </button>
            <div
              className="accordion-collapse"
              role="region"
              aria-hidden={openIndex === index ? 'false' : 'true'}
              style={{ display: openIndex === index ? 'block' : 'none' }}
            >
              <div className="accordion-body">
                {faq.answer.map((para, idx) => (
                  <p key={idx} style={{ color: '#57647C' }}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

