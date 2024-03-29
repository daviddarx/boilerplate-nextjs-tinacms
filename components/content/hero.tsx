import CustomMarkdown from '@/components/ui/custom-markdown';
import { PageBlocksHero } from '@/tina/__generated__/types';
import classNames from 'classnames';
import { tinaField } from 'tinacms/dist/react';

export default function Hero(props: PageBlocksHero) {
  return (
    <section>
      <div className='text-container'>
        <h2 data-tina-field={tinaField(props, 'title')}>{props.title}</h2>
        {props.description && (
          <div data-tina-field={tinaField(props, 'description')}>
            <CustomMarkdown content={props.description} />
          </div>
        )}
        {props.links && (
          <div className='flex flex-col items-start gap-12 md:flex-row'>
            {props.links?.map((link, i) => (
              <a
                key={i}
                href={link?.href}
                className={classNames('button', {
                  'button--primary': link?.style === 'primary',
                })}
                data-tina-field={tinaField(link!, 'label')}
              >
                {link?.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
