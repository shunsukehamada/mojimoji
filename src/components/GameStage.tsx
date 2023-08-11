import { FC } from 'react';
import { Config } from '../logic/config';
import { MojiImage } from './MojiImage';
import { MojiOnStage } from '../logic/moji';

export type GameStageProps = {
    mojis: MojiOnStage[];
};

export const GameStage: FC<GameStageProps> = ({ mojis }) => {
    return (
        <div
            style={{
                width: Config.mojiImgWidth * Config.stageCols,
                height: Config.mojiImgHeight * Config.stageRows,
                backgroundColor: Config.stageBackgroundColor,
                backgroundImage: 'url(img/moji_2bg.png)',
            }}
        >
            {mojis.map(({ mojiId, ...moji }) => (
                <MojiImage key={mojiId} {...moji} />
            ))}
        </div>
    );
};