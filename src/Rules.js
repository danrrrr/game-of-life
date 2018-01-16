import React from 'react';
import {Card,CardHeader, CardText} from 'material-ui/Card';

const Rules = () => (
    <Card>
        <CardHeader title="生命游戏规则如下:"/>
        <CardText>
            <ol>
                <li>每个细胞有两种状态-存活或死亡，每个细胞与以自身为中心的周围八格细胞产生互动。</li>
                <li>当前细胞为存活状态时，当周围低于2个（不包含2个）存活细胞时， 该细胞变成死亡状态。</li>
                <li>当前细胞为存活状态时，当周围有2个或3个存活细胞时， 该细胞保持原样。</li>
                <li>当前细胞为存活状态时，当周围有3个以上的存活细胞时，该细胞变成死亡状态。</li>
                <li>当前细胞为死亡状态时，当周围有3个存活细胞时，该细胞变成存活状态。</li>
            </ol>
        </CardText>
    </Card>
);

export default Rules;

