import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getCurrentFormattedDate } from '../utils/dateUtils';
import { HighlightedText } from '../components/HighlightedText';
import { BackToTop } from '../components/BackToTop';

export function AiFuturePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <BackToTop />
      </div>
      <article className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8 lg:p-12">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              AIが変える会計の未来
            </h1>
            <div className="flex items-center text-gray-600">
              <span className="mr-4">投稿日: {getCurrentFormattedDate()}</span>
              <span className="mr-4">|</span>
              <span>カテゴリー: AI技術動向</span>
            </div>
          </div>

          <div className="prose max-w-none">
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-8">
              <p className="text-lg text-emerald-800">
                AIの進化により、経理業務や確定申告作業の自動化が加速しています。
                この記事では、AIがもたらす会計業務の革新と、これからの時代に求められるスキルについて解説します。
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  AIによる自動化の未来
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    AIの発達により近い将来には単純な経理業務や確定申告のための作業はほとんど自動化する未来がくるでしょう。
                  </p>
                  <p className="text-gray-700">
                    すでに<HighlightedText>chatGPTでは音声によるAIとの対話が実現</HighlightedText>しておりコンピューターに向かって会話をすることで英会話の練習など簡単にできるようになりました。もちろん質問をすると検索エンジン等から知識を探してきて回答することもできます。
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  AI技術の進化と低コスト化
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    今後の技術進化によりAIと対話をして処理を行ってもらうコストがどんどん下がり、その回答の精度は飛躍的に上がっていきます。
                  </p>
                  <p className="text-gray-700">
                    さらには<HighlightedText>Claude computeuseといったパソコン自体を操作することができるAI</HighlightedText>も登場しました。これによりAIと言語で会話をしながらパソコンの処理や作業の命令を行うことができるような未来が近づいてきています。
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  AIによる業務自動化の実現
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    そうなるとまずは単純なパソコン作業は人間がやらなくとも、AIに正確に命令することで実行できてしまうのです。仕事場で部下に命令するような感じでパソコンのAIに向かって仕事を言語で命令する時代が近づいています。
                  </p>
                  <p className="text-gray-700">
                    それでは人間は何もしなくていいかというとそうではなく、AIが実行する作業について何をしてもらいたいのか正確に命令しなければなりません。（指示や命令の事をプロンプトと言います。）
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  人間に求められる新しいスキル
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    つまり人間に必要とされるのは、仕事仲間であるAIに正確な命令をできる知識です。AIが実行した作業について正しいかどうかのチェックをすることが求められます。
                  </p>
                  <p className="text-gray-700">
                    人間はAIに仕事を奪われるではなくAIを活用することにより超効率的な仕事をできるようになるということです。AIを恐れることなくAIの活用方法と知識の研鑽をすることで激動のAI時代の波に乗りましょう。
                  </p>
                </div>
              </section>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                まとめ
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">AIによる経理業務の自動化が加速</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">音声対話やパソコン操作の自動化が実現</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">AIへの正確な指示と結果確認が重要なスキルに</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
      <div className="mt-6">
        <BackToTop />
      </div>
    </div>
  );
}