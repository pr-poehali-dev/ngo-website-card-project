import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/a6bdbe54-3b49-440a-9eb8-6c343a67f304/files/32afbdc3-d26d-447b-ac97-f045b0a0ab7b.jpg';

const NAV = [
  { id: 'home', label: 'Главная' },
  { id: 'about', label: 'О нас' },
  { id: 'docs', label: 'Документация' },
  { id: 'news', label: 'Новости' },
  { id: 'contacts', label: 'Контакты' },
];

const DOCUMENTS = [
  { title: 'Устав Союза', desc: 'Редакция от 12 января 2024 г.', size: 'PDF · 1,4 МБ' },
  { title: 'Свидетельство о регистрации', desc: 'Минюст России', size: 'PDF · 820 КБ' },
  { title: 'Годовой отчёт за 2024 год', desc: 'Финансовая и содержательная отчётность', size: 'PDF · 3,1 МБ' },
  { title: 'Стандарты классификации кемпингов', desc: 'Требования к объектам размещения', size: 'PDF · 2,2 МБ' },
  { title: 'Положение о членстве в Союзе', desc: 'Порядок вступления и взносов', size: 'PDF · 690 КБ' },
  { title: 'Политика обработки данных', desc: 'В соответствии с 152-ФЗ', size: 'PDF · 540 КБ' },
];

const NEWS = [
  {
    date: '24 июня 2026',
    tag: 'Стандарты',
    title: 'Утверждены отраслевые стандарты классификации кемпингов и автокемпингов',
    text: 'Документ устанавливает единые требования к инфраструктуре, безопасности и сервису объектов размещения автотуристов.',
  },
  {
    date: '11 июня 2026',
    tag: 'Мероприятия',
    title: 'Итоги ежегодного съезда профессионалов индустрии автотуризма',
    text: 'Участники обсудили развитие сети кемпингов вдоль федеральных трасс и меры государственной поддержки отрасли.',
  },
  {
    date: '02 июня 2026',
    tag: 'Развитие',
    title: 'Открыт приём заявок в реестр сертифицированных кемпингов',
    text: 'Операторы автокемпингов могут пройти добровольную сертификацию и войти в национальный реестр объектов.',
  },
];

const VALUES = [
  { icon: 'Map', title: 'Развитие отрасли', text: 'Формируем единую инфраструктуру кемпингов и автотуризма по всей стране.' },
  { icon: 'ShieldCheck', title: 'Стандарты качества', text: 'Разрабатываем и внедряем отраслевые стандарты безопасности и сервиса.' },
  { icon: 'Users', title: 'Объединение профессионалов', text: 'Объединяем операторов кемпингов, производителей и автотуристов.' },
  { icon: 'Landmark', title: 'Диалог с государством', text: 'Представляем интересы индустрии в органах власти и ведомствах.' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-navy">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-navy text-white border-b border-white/10">
        <div className="container flex items-center justify-between h-20">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-3 text-left">
            <div className="flex items-center justify-center w-11 h-11 border border-gold/60">
              <Icon name="Tent" size={22} className="text-gold" />
            </div>
            <div className="leading-tight max-w-[260px]">
              <p className="font-serif text-lg tracking-wide leading-tight">Национальный союз профессионалов</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">индустрии кемпингов, кэмпинга и каравана</p>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm uppercase tracking-wider text-white/70 hover:text-gold transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>

          <button className="lg:hidden text-white" onClick={() => setMenuOpen((v) => !v)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>

        {menuOpen && (
          <nav className="lg:hidden bg-navy border-t border-white/10 px-6 pb-6 flex flex-col gap-4 pt-4">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-left text-sm uppercase tracking-wider text-white/80 hover:text-gold"
              >
                {n.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="container relative z-10 py-24">
          <div className="max-w-3xl animate-fade-in">
            <div className="gold-line mb-8" />
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-6">
              Развиваем автотуризм в России
            </p>
            <h1 className="font-serif text-white text-5xl md:text-7xl leading-[1.05] mb-8">
              Объединяем индустрию кемпингов и автотуризма
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Некоммерческая организация, объединяющая профессионалов отрасли:
              операторов кемпингов, производителей и путешественников. Формируем стандарты
              и развиваем инфраструктуру автотуризма по всей стране.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollTo('docs')}
                className="bg-gold hover:bg-gold/90 text-navy rounded-none h-12 px-8 text-sm uppercase tracking-wider font-medium"
              >
                Публичная документация
              </Button>
              <Button
                onClick={() => scrollTo('contacts')}
                variant="outline"
                className="border-white/40 text-white bg-transparent hover:bg-white hover:text-navy rounded-none h-12 px-8 text-sm uppercase tracking-wider"
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-light text-white">
        <div className="container grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { n: '12', l: 'лет работы' },
            { n: '350+', l: 'кемпингов в реестре' },
            { n: '60', l: 'регионов присутствия' },
            { n: '500+', l: 'членов союза' },
          ].map((s) => (
            <div key={s.l} className="py-10 px-4 text-center">
              <p className="font-serif text-4xl md:text-5xl text-gold mb-2">{s.n}</p>
              <p className="text-xs uppercase tracking-wider text-white/60">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32">
        <div className="container grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="gold-line mb-6" />
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">О нас</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              Объединяем индустрию ради развития автотуризма
            </h2>
            <div className="space-y-5 text-navy/70 text-lg leading-relaxed">
              <p>
                Национальный союз профессионалов индустрии кемпингов и автотуризма —
                это отраслевое объединение, созданное для развития цивилизованного
                автотуризма в России. Мы разрабатываем стандарты, поддерживаем операторов
                и представляем интересы отрасли.
              </p>
              <p>
                Деятельность Союза регулируется уставом, утверждённым учредителями.
                Мы ведём национальный реестр кемпингов, проводим добровольную сертификацию
                объектов и публикуем отчётность ежегодно.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="border border-navy/10 p-7 hover:border-gold transition-colors">
                <div className="flex items-center justify-center w-12 h-12 bg-navy text-gold mb-5">
                  <Icon name={v.icon} size={24} />
                </div>
                <h3 className="font-serif text-2xl mb-3">{v.title}</h3>
                <p className="text-navy/60 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section id="docs" className="py-24 md:py-32 bg-secondary">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <div className="gold-line mb-6" />
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Документация</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-5">
              Публичные документы и отчётность
            </h2>
            <p className="text-navy/60 text-lg">
              Все ключевые документы организации находятся в открытом доступе.
              Нажмите, чтобы ознакомиться или скачать.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DOCUMENTS.map((d) => (
              <button
                key={d.title}
                className="group bg-background border border-navy/10 p-7 text-left hover:border-gold hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-navy text-gold">
                    <Icon name="FileText" size={22} />
                  </div>
                  <Icon
                    name="Download"
                    size={20}
                    className="text-navy/30 group-hover:text-gold transition-colors mt-1"
                  />
                </div>
                <h3 className="font-serif text-2xl mb-2 leading-snug">{d.title}</h3>
                <p className="text-navy/60 text-sm mb-4">{d.desc}</p>
                <p className="text-xs uppercase tracking-wider text-navy/40">{d.size}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <div className="gold-line mb-6" />
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Новости</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Актуальные события и сообщения
            </h2>
          </div>

          <div className="space-y-px bg-navy/10">
            {NEWS.map((item) => (
              <article
                key={item.title}
                className="group bg-background grid md:grid-cols-[200px_1fr_auto] gap-6 md:gap-10 items-start p-8 hover:bg-secondary transition-colors"
              >
                <div>
                  <p className="text-navy/50 text-sm mb-2">{item.date}</p>
                  <span className="inline-block text-xs uppercase tracking-wider text-gold border border-gold/40 px-3 py-1">
                    {item.tag}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl mb-3 leading-snug">{item.title}</h3>
                  <p className="text-navy/60 leading-relaxed">{item.text}</p>
                </div>
                <Icon
                  name="ArrowRight"
                  size={24}
                  className="hidden md:block text-navy/30 group-hover:text-gold group-hover:translate-x-1 transition-all mt-2"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24 md:py-32 bg-navy text-white">
        <div className="container grid lg:grid-cols-2 gap-16">
          <div>
            <div className="gold-line mb-6" />
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Контакты</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-10">
              Свяжитесь с организацией
            </h2>

            <div className="space-y-7">
              {[
                { icon: 'MapPin', label: 'Адрес', value: '125009, г. Москва, ул. Тверская, д. 10, офис 305' },
                { icon: 'Phone', label: 'Телефон', value: '+7 (495) 123-45-67' },
                { icon: 'Mail', label: 'Электронная почта', value: 'info@autocamping-union.ru' },
                { icon: 'Clock', label: 'Часы работы', value: 'Пн–Пт, 09:00 – 18:00' },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-5">
                  <div className="flex items-center justify-center w-11 h-11 border border-gold/40 text-gold shrink-0">
                    <Icon name={c.icon} size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50 mb-1">{c.label}</p>
                    <p className="text-white/90 text-lg">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-xs uppercase tracking-wider text-white/50 mb-2">Реквизиты</p>
              <p className="text-white/70 text-sm leading-relaxed">
                ИНН 9703128882
              </p>
            </div>
          </div>

          <div className="bg-white/[0.04] border border-white/10 p-8 md:p-10">
            <h3 className="font-serif text-2xl mb-6">Форма обращения</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <Input
                placeholder="Ваше имя"
                className="bg-transparent border-white/20 rounded-none h-12 text-white placeholder:text-white/40 focus-visible:ring-gold"
              />
              <Input
                type="email"
                placeholder="Электронная почта"
                className="bg-transparent border-white/20 rounded-none h-12 text-white placeholder:text-white/40 focus-visible:ring-gold"
              />
              <Textarea
                placeholder="Текст обращения"
                rows={5}
                className="bg-transparent border-white/20 rounded-none text-white placeholder:text-white/40 focus-visible:ring-gold resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-gold hover:bg-gold/90 text-navy rounded-none h-12 text-sm uppercase tracking-wider font-medium"
              >
                Отправить обращение
              </Button>
              <p className="text-white/40 text-xs leading-relaxed">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                в соответствии с политикой организации.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white border-t border-white/10">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 border border-gold/50">
              <Icon name="Tent" size={18} className="text-gold" />
            </div>
            <p className="font-serif text-lg">Союз индустрии кемпингов и автотуризма</p>
          </div>
          <p className="text-white/40 text-sm text-center">
            © 2026 Национальный союз профессионалов индустрии кемпингов и автотуризма. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;