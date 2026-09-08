import React, { useState } from 'react';
import { 
  FileCheck2, PlayCircle, ShieldCheck, Film, Scale, Lock, 
  Smartphone, CreditCard, Radio, ShieldAlert, AlertTriangle, 
  HelpCircle, Shield, RefreshCw, Mail, Copy, Check, Share2, 
  Printer
} from 'lucide-react';

interface PolicyPointItem {
  id: number;
  title: string;
  summary: string;
  details: string[];
}

const pointsData: PolicyPointItem[] = [
  {
    id: 1,
    title: 'الموافقة على الشروط والأهلية القانونية للاستخدام',
    summary: 'يعد تحميل أو تثبيت أو استخدام تطبيق سينمانا بريميوم (Cinemana Premium) إقراراً صريحاً وموافقة قانونية ملزمة وكاملة على كافة بنود هذه الاتفاقية وسياسة الخصوصية.',
    details: [
      'يجب ألا يقل عمر المستخدم عن 13 عاماً (أو السن القانوني المحدد في بلد إقامتك لاستخدام التطبيقات الرقمية).',
      'في حال إجراء أي عمليات شراء أو اشتراكات داخل التطبيق، يجب أن يكون عمرك 18 عاماً أو بموافقة وإشراف ولي الأمر.',
      'إذا كنت لا توافق على أي بند من هذه الشروط، يرجى التوقف الفوري عن استخدام التطبيق وإلغاء تثبيته من جهازك.'
    ]
  },
  {
    id: 2,
    title: 'طبيعة الخدمة والترخيص الممنوح',
    summary: 'تطبيق سينمانا بريميوم هو أداة مشغل وسائط متعددة برمجية متطورة تمنح المستخدم رخصة شخصية غير حصرية ومحدودة للاستخدام الفردي.',
    details: [
      'يمنح المستخدم رخصة شخصية، غير قابلة للتحويل، وقابلة للإلغاء لتشغيل وسائطه وروابطه الخاصة.',
      'يحظر تماماً بيع، تأجير، نسخ، تفكيك، أو إجراء هندسة عكسية للكود المصدري أو ملفات التطبيق.',
      'الترخيص مخصص للاستخدام الشخصي غير التجاري ولا يمنح المستخدم أي حقوق ملكية في البرمجية الأصلية.'
    ]
  },
  {
    id: 3,
    title: 'حقوق الملكية الفكرية والعلامة التجارية',
    summary: 'كافة الأكواد البرمجية، الواجهات، الهوية البصرية، والشعارات الخاصة بتطبيق سينمانا بريميوم هي ملكية حصرية للمطور ومحمية بالقوانين الدولية.',
    details: [
      'اسم "سينمانا بريميوم" وشعاراته وتصميم واجهاته علامات تخضع لحماية قوانين الملكية الفكرية.',
      'لا يجوز استخدام العلامة التجارية أو إعادة توزيع النسخ المعدلة من التطبيق دون إذن خطي مسبق.',
      'المكتبات البرمجية مفتوحة المصدر المدمجة تخضع لتراخيصها الخاصة المعتمدة عالمياً.'
    ]
  },
  {
    id: 4,
    title: 'مسؤولية المحتوى وإخلاء مسؤولية الوسائط والبث',
    summary: 'تطبيق سينمانا بريميوم أداة تشغيل محايدة؛ التطبيق لا يستضيف، لا يوفر، ولا يملك أي محتوى مرئي أو قنوات بث، والمستخدم هو المسؤول الوحيد عما يشغله.',
    details: [
      'التطبيق يعمل كمشغل وسائط فقط ولا يحتوي على وسائط مخزنة مسبقاً على خوادمه الخاصة.',
      'المستخدم يتحمل المسؤولية القانونية الكاملة عن شرعية الملفات وروابط البث وقوائم التشغيل (M3U/M3U8/MP4) التي يقوم بإضافتها.',
      'لا نتحمل أي مسؤولية عن انقطاع أو عدم استقرار الخوادم أو مزودي البث الخارجيين.'
    ]
  },
  {
    id: 5,
    title: 'حقوق النشر والملكية الرقمية (DMCA)',
    summary: 'نحترم حقوق الطبع والنشر ونلتزم بالاستجابة السريعة لأي إشعارات بانتهاك حقوق الملكية الفكرية وفق القوانين المعمول بها.',
    details: [
      'نظراً لكون التطبيق مشغلاً محلياً، فإن نزاعات المحتوى تعود لمزودي الروابط، ومع ذلك نحقق في أي إبلاغ يخص التطبيق.',
      'يمكن لأصحاب الحقوق إرسال إشعارات الانتهاك الرسمية إلى بريد الدعم المعتمد لمراجعتها خلال 48 إلى 72 ساعة.',
      'يجب أن يتضمن الإشعار وصفاً دقيقاً للحق المنتهك وإثبات التمثيل القانوني لصاحب الحق.'
    ]
  },
  {
    id: 6,
    title: 'سياسة الخصوصية وحماية البيانات (Privacy & GDPR)',
    summary: 'خصوصيتك محمية؛ لا نقوم بجمع أو فحص محتوى وسائطك الشخصية، ويتم فك تشفير وتشغيل الملفات محلياً على جهازك بالكامل.',
    details: [
      'لا يتم رفع فيديوهاتك أو صورك أو قوائم تشغيلك إلى أي خوادم خارجية؛ المعالجة بالكامل On-Device.',
      'قد نجمع بيانات تشخيصية مجهولة الهوية مثل نوع الجهاز وإصدار النظام وسجلات الأعطال (Crash Logs) لتحسين الأداء فقط.',
      'لا نقوم ببيع أو تأجير أي بيانات مستخدمين لأي جهة إعلانية أو تجارية طرف ثالث.'
    ]
  },
  {
    id: 7,
    title: 'أذونات وصلاحيات الجهاز والأغراض الفنية',
    summary: 'نطلب فقط الأذونات الضرورية لتمكين تشغيل الفيديو والصوت وقراءة ملفات الذاكرة وإدارة استمرار التشغيل.',
    details: [
      'إذن الوصول للتخزين والوسائط: لقراءة مقاطع الفيديو والملفات الصوتية وملفات الترجمة المخزنة على جهازك.',
      'إذن الاتصال بالإنترنت والشبكة: لتمكين تدفق روابط البث وتحميل الترجمات من مصادرها عبر الإنترنت.',
      'إذن التشغيل في الخلفية ومنع السكون (Wake Lock): لضمان استمرار تشغيل الصوت عند قفل الشاشة وعدم إطفائها أثناء المشاهدة.',
      'إذن التحكم بالسطوع والصوت: للتحكم السريع بالإيماءات أثناء وضع ملء الشاشة.'
    ]
  },
  {
    id: 8,
    title: 'الاشتراكات والمدفوعات والمشتريات (Cinemana Premium)',
    summary: 'تتم معالجة جميع الاشتراكات والمشتريات المدفوعة بأمان تام وحصرياً عبر متجر التطبيقات الرسمي (Google Play / App Store).',
    details: [
      'تتجدد الاشتراكات الدورية تلقائياً ما لم يتم إلغاؤها قبل 24 ساعة على الأقل من نهاية الفترة الحالية من حساب المتجر.',
      'تخضع عمليات الاسترداد المالي لسياسات وشروط متجر التطبيقات المعتمد التابع لجهازك.',
      'يمكن استعادة المشتريات السابقة (Restore Purchases) على أي جهاز جديد مسجل بنفس حساب المتجر.'
    ]
  },
  {
    id: 9,
    title: 'الإعلانات وخدمات الطرف الثالث',
    summary: 'قد تحتوي النسخة المجانية على إعلانات مقدمة من شبكات معتمدة وموثوقة تلتزم بمعايير الخصوصية والأمان.',
    details: [
      'تخضع الإعلانات المعروضة لسياسات الخصوصية الخاصة بالشبكات المزودة (مثل Google AdMob).',
      'يمكن للمستخدم الترقية إلى النسخة المدفوعة (سينمانا بريميوم) لإزالة كافة الإعلانات نهائياً.',
      'لا نتحمل أي مسؤولية عن محتوى المواقع الخارجية أو الخدمات التي يتم الانتقال إليها عبر الإعلانات.'
    ]
  },
  {
    id: 10,
    title: 'أمان البيانات وحماية الأطفال (COPPA & Families)',
    summary: 'نطبق تدابير أمنية صارمة، والتطبيق غير موجه لجمع بيانات الأطفال دون سن 13 عاماً مع توفير أدوات الحماية الأبوية.',
    details: [
      'يوفر التطبيق خيارات القفل المحلي وتأمين المجلدات برمز حماية لدعم البيئة العائلية الآمنة.',
      'لا نقوم عمداً بجمع أي معلومات تعريفية شخصية من الأطفال القُصّر.',
      'يحق لأولياء الأمور التواصل معنا لحذف أي معلومات تشخيصية تم تقديمها بدون إذن مسبق.'
    ]
  },
  {
    id: 11,
    title: 'ميثاق الاستخدام المقبول والأنشطة المحظورة',
    summary: 'يلتزم المستخدم باستخدام التطبيق في الأغراض المشروعة والقانونية فقط وتجنب أي استخدام يضر بالبرمجية أو بالنظام العام.',
    details: [
      'يحظر نشر أو توزيع نسخ معدلة غير رسمية (Modded APKs) من تطبيق سينمانا بريميوم.',
      'يحظر محاولة اختراق خوادم التحقق من التراخيص أو تعطيل برمجيات الحماية وإدارة الحقوق الرقمية (DRM).',
      'يحظر استخدام التطبيق لبث أو تداول أي محتوى يخالف القوانين أو يحرض على العنف والكراهية.'
    ]
  },
  {
    id: 12,
    title: 'إخلاء المسؤولية عن الضمانات (AS IS)',
    summary: 'يقدم التطبيق "كما هو" و"حسب توفره" دون أي ضمانات صريحة أو ضمنية للتوافق مع جميع صيغ الملفات غير القياسية أو التالفة.',
    details: [
      'يعتمد أداء فك التشفير وعرض الفيديوهات بدقة عالية (4K/HD) على قدرات المعالج وعتاد جهاز المستخدم.',
      'لا نضمن استمرار أو جودة تشغيل الروابط الخارجية التي تعتمد على سيرفرات وسرعات إنترنت غير تابعة لنا.',
      'نبذل أقصى جهد ممكن لتحديث المشغل ودعم أحدث صيغ الوسائط الصوتية والمرئية بانتظام.'
    ]
  },
  {
    id: 13,
    title: 'حدود المسؤولية القانونية والتعويض',
    summary: 'لا يتحمل مطورو تطبيق سينمانا بريميوم أي مسؤولية عن أي أضرار غير مباشرة أو فقدان بيانات أو تلف ملفات ناتج عن الاستخدام.',
    details: [
      'المستخدم مسؤول عن الاحتفاظ بنسخ احتياطية من ملفاته ووسائطه المخزنة على أجهزته.',
      'ينحصر سقف المسؤولية المالية للمطور – في حال إقرارها قانونياً – بما دفعه المستخدم كرسوم اشتراك بالتطبيق.',
      'يوافق المستخدم على إخلاء طرف المطور من أي مطالبات أو دعاوى تنتج عن سوء استخدامه للتطبيق.'
    ]
  },
  {
    id: 14,
    title: 'إنهاء الخدمة وتعديل وتحديث الشروط',
    summary: 'نحتفظ بالحق في تعديل هذه الشروط أو تحديث ميزات التطبيق دورياً، مع إشعار المستخدمين عند إجراء أي تغييرات جوهرية.',
    details: [
      'سيتم نشر أي تعديلات جديدة في هذه الصفحة مع تحديث تاريخ "آخر تعديل".',
      'استمرار استخدام التطبيق بعد نشر التعديلات يعد موافقة صريحة على الشروط المحدثة.',
      'يحق للمستخدم إنهاء هذه الاتفاقية في أي وقت بحذف التطبيق من جميع أجهزته.'
    ]
  },
  {
    id: 15,
    title: 'القانون الحاكم وقنوات التواصل والدعم الفني',
    summary: 'تخضع هذه الاتفاقية وتفسر وفق القوانين المعمول بها، ونوفر قنوات تواصل رسمية ومباشرة للرد على كافة الاستفسارات.',
    details: [
      'البريد الإلكتروني الرسمي للدعم الفني والاستفسارات القانونية: AbrahemQahtan53@gmail.com',
      'يتم حل أي خلافات أو نزاعات بالطرق الودية عبر مراسلة فريق الدعم المباشر قبل اتخاذ أي إجراءات أخرى.',
      'إذا اعتبر أي بند من هذه الشروط باطلاً، فإن باقي البنود تظل سارية المفعول بكامل قوتها القانونية.'
    ]
  }
];

export default function App() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-['Cairo',sans-serif] selection:bg-amber-500 selection:text-slate-950">
      {/* Header Container */}
      <header className="border-b border-slate-800/80 bg-slate-900/70 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20">
              <Film className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-100">سينمانا بريميوم</h1>
              <p className="text-xs text-amber-400/90 font-medium">Cinemana Premium Policy</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="copy-page-link-btn"
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>تم نسخ الرابط!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>نسخ الرابط للمتاجر</span>
                </>
              )}
            </button>

            <button
              id="print-page-btn"
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-medium border border-slate-700/60 transition-colors"
              title="طباعة أو تصدير PDF"
            >
              <Printer className="w-4 h-4 text-slate-400" />
              <span>طباعة / PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Single-Page Document Content */}
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        {/* Main Document Title & Metadata */}
        <section className="text-center space-y-4 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>وثيقة قانونية رسمية معتمدة (15 نقطة)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-100 tracking-tight leading-snug">
            شروط سياسة واستخدام الخدمة لتطبيق سينمانا بريميوم
          </h1>

          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            تحدد هذه الوثيقة الشروط والأحكام وسياسة الخصوصية التي تحكم استخدام تطبيق <strong>سينمانا بريميوم (Cinemana Premium)</strong>، وتشمل كافة البنود الـ 15 المنظمة للاستخدام، الخصوصية، الأذونات، والتراخيص المعتمدة للمتاجر الرقمية.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-2">
            <span>تاريخ السريان: 1 يناير 2025</span>
            <span>•</span>
            <span className="text-amber-400">آخر تحديث: 1 سبتمبر 2026</span>
            <span>•</span>
            <span>البريد المعتمد: AbrahemQahtan53@gmail.com</span>
          </div>
        </section>

        {/* 15 Sequential Policy Points */}
        <section className="space-y-6">
          {pointsData.map((item) => (
            <article
              key={item.id}
              id={`point-${item.id}`}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 shadow-sm space-y-3.5 hover:border-slate-700 transition-colors"
            >
              {/* Point Header */}
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 text-sm font-bold flex items-center justify-center flex-shrink-0 font-mono mt-0.5">
                  {item.id}
                </span>
                <h2 className="text-base sm:text-lg font-bold text-slate-100 leading-snug">
                  {item.title}
                </h2>
              </div>

              {/* Point Summary Paragraph */}
              <p className="text-sm text-slate-300 leading-relaxed pr-11 font-medium">
                {item.summary}
              </p>

              {/* Sub-details list */}
              <div className="pr-11 pt-1 space-y-2">
                {item.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        {/* Official Contact Box */}
        <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-100">التواصل والدعم الفني والقانوني</h3>
          <p className="text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
            لأي استفسارات حول شروط الخدمة وسياسة الخصوصية أو لإرسال إشعارات الدعم و DMCA، يرجى مراسلتنا مباشرة على:
          </p>
          <a
            href="mailto:AbrahemQahtan53@gmail.com"
            id="official-contact-email-link"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-amber-400 font-mono text-sm hover:border-amber-500 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>AbrahemQahtan53@gmail.com</span>
          </a>
        </section>
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 space-y-1">
          <p>© {new Date().getFullYear()} سينمانا بريميوم (Cinemana Premium). جميع الحقوق محفوظة.</p>
          <p className="text-[11px] text-slate-600">وثيقة رسمية متوافقة مع إرشادات متاجر التطبيقات ومراجعات Google Play و Apple App Store.</p>
        </div>
      </footer>
    </div>
  );
}
