import React from 'react';
import BinaryTree from '../tree/BinaryTree';
export default class TreeCanvas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            w: 500,
            h: 500,
            depth: 2,
            radius: 15,
            nodes: []
        }
    }

    componentDidMount() {
        const { w, h, radius } = this.state;
        var tree = new BinaryTree();
        '20 10 30 5 15 40 25 1 2 -10'.split(' ').map(e => tree.add(parseInt(e.trim())))
        const nodes = [];
        var i = 0;
        const depth = tree.depth();
        const yGap = (h - (2 * radius * depth)) / (depth + 1);
        const cb = (v) => {
            i++;
            const xGap = (w - (radius * v.depth)) / (v.depth + 2);
            const cx = xGap * v.depthSerial + (radius / 2);
            const cy = yGap * v.depth + 2 * radius;
            console.log(`--> xGap:${xGap}, yGap:${yGap}, (${cx},${cy}) `, v);

            nodes.push(<circle key={i++} cx={cx} cy={cy} r={radius} fill="white" />);
            nodes.push(<text key={i++} x={cx} y={cy} fontSize={12} fill="blue" >{v.value}</text>);
        };

        this.setState({ ...this.state, nodes: nodes })
        tree.preorder(cb);
    }

    render() {
        const rs = [10, 20, 30]
        const { w, h, depth, radius, nodes } = this.state;
        const gap = (h - (2 * radius * depth)) / (depth + 1);
        const c = w / 2 + radius / 2;
        console.log(`gap: ${gap}, c:${c}, nodes:${nodes.length}, state:${this.state}`);

        const circles = rs.map((r, i) => {
            return <circle key={i} cx={c} cy={(gap + radius) * (i + 1)} r={radius} fill="white" />
        });
        return React.createElement('svg', { key: 'canvas', width: w, height: h, fill: 'green' },
            [React.createElement('rect', {
                key: 'canvas1',
                width: "100%",
                height: "100%",
                fill: "black",
                x: '10', y: '10'
            })
            ].concat(nodes)
        );;
    }
}