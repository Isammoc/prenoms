import Item from './Item';

export default class VoteService {
    private vetoed: Set<number>;
    private lesser: Map<number, Set<number>>;
    private greater: Map<number, Set<number>>;
    private initial: ReadonlyArray<string> = [
        'Veto1',
        'Prenom6',
        'Prenom8',
        'Veto2',
        'Prenom2',
        'Prenom4',
        'Prenom10',
        'Prenom9',
        'Prenom1',
        'Prenom7',
        'Prenom3',
        'Veto3',
        'Prenom5',
    ];

    constructor() {
        this.vetoed = new Set();
        this.lesser = new Map(this.initial.map((item, id) => [id, new Set()] as [number, Set<number>]));
        this.greater = new Map(this.initial.map((item, id) => [id, new Set()] as [number, Set<number>]));
    }

    newVote(): ReadonlyArray<Item> {
        let doNotTake = new Set(this.vetoed);
        for (let i = 0; i < this.initial.length; i++) {
            if (this.greater.get(i)!.size + this.lesser.get(i)!.size >= (this.initial.length - this.vetoed.size)) {
                doNotTake.add(i);
            }
        }

        if (doNotTake.size < this.initial.length) {
            let a = this.randomId(this.vetoed);

            doNotTake.add(a);
            this.lesser.get(a)!.forEach(element => {
                doNotTake.add(element);
            });
            this.greater.get(a)!.forEach((element) => {
                doNotTake.add(element);
            });

            if (doNotTake.size < this.initial.length) {
                let b = this.randomId(doNotTake);
                return [this.toItem(a), this.toItem(b)];
            } else {
                return this.newVote();
            }
        }
        return [
            new Item(-1, 'C\'est', [], [], false),
            new Item(-2, 'fini', [], [], false)
        ];
    }

    reject(item: Item) {
        this.vetoed.add(item.id);
    }

    prefer(itemA: Item, itemB: Item) {
        let a = itemA.id;
        let b = itemB.id;
        this.lesser.get(a)!.add(b);
        this.lesser.get(b)!.forEach((e: number) => {
            this.lesser.get(a)!.add(e);
        });

        this.greater.get(b)!.add(a);
        this.greater.get(a)!.forEach((e: number) => {
            this.greater.get(b)!.add(e);
        });
    }

    currentStatus(): ReadonlyArray<Item> {
        return this.initial.map((_, id) => this.toItem(id));
    }

    private randomId(exclude: Set<number>) {
        let r;
        do {
            r = Math.floor(Math.random() * this.initial.length);
        } while (exclude.has(r));
        return r;
    }

    private toItem(id: number): Item {
        return new Item(
            id,
            this.initial[id],
            Array.from(this.greater.get(id)!.values()).map((i) => this.initial[i]),
            Array.from(this.lesser.get(id)!.values()).map((i) => this.initial[i]),
            this.vetoed.has(id)
        );
    }
}
