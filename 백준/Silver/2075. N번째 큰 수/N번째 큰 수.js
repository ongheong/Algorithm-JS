// readline 모듈을 불러와 입력을 처리하기 위한 인터페이스를 설정
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * 최소 힙 클래스
 * - 이진 힙 구조로 구현 -> 최소값을 빠르게 찾을 수 있음
 * - 0번 인덱스는 null로 두고, 1번 인덱스부터 시작하여 게산을 편리하게 함
 * - 부모 노드의 인덱스 = Math.floor(현 인덱스 / 2)
 * - 왼쪽 자식 노드 인덱스 = 현 인덱스 * 2
 * - 오른쪽 자식 노드 인덱스 = 현 인덱스 * 2 + 1
 */

class MinHeap {
  // 힙 초기화: heap[0]은 null로 설정
  constructor() {
    this.heap = [null];
  }

  /**
   * 새로운 값(value)을 힙의 마지막에 추가 -> 부모 노드와 비교하여 위로 올림
   * 시간복잡도: O(log N)
   */
  push(value) {
    // 값을 힙의 마지막에 추가
    this.heap.push(value);
    // 추가된 값의 인덱스
    let currentIndex = this.heap.length - 1;
    // root(index 1)에 도달하거나, 부모 노드 값이 더 작을 때까지 반복
    while (currentIndex > 1) {
      // 현재 노드의 부모 노드 인덱스 계산
      let parentIndex = Math.floor(currentIndex / 2);
      // 부모 노드가 현재 노드보다 작거나 같다면 중단
      if (this.heap[parentIndex] <= this.heap[currentIndex]) break;
      // 부모 노드가 더 크면 swap
      [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
      // 현재 위치를 부모 노드 위치로 업데이트
      currentIndex = parentIndex;
    }
  }

  /**
   * 힙에서 루트 노드(최솟값)을 제거하고, 마지막 노드를 루트로 이동
   * 리턴: 제거된 최소값 or 힙이 비어있으면 null
   * 시간복잡도: O(log n)
   */
  pop() {
    // 힙이 비어있으면 null 반환
    if (this.heap.length <= 1) return null;

    // 루트 값을 저장 (반환할 최솟값)
    const min = this.heap[1];
    // 마지막 노드를 루트로 이동
    this.heap[1] = this.heap.pop();
    // 현재 비교할 노드의 인덱스
    let currentIndex = 1;

    while (true) {
      const leftIndex = currentIndex * 2;
      const rightIndex = currentIndex * 2 + 1;
      // 현재까지 찾은 최소값의 인덱스
      let minIndex = currentIndex;

      // 왼쪽 자식이 존재하고, 현재 최소값보다 작다면 minIndex 업데이트
      if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[minIndex]) {
        minIndex = leftIndex;
      }
      // 오른쪽 자식이 존재하고, 현재 최소값보다 작다면 minIndex 업데이트
      if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[minIndex]) {
        minIndex = rightIndex;
      }

      // 자식 노드들이 현재 노드보다 크거나 같다면 힙 속성 만족 -> 중단
      if (minIndex === currentIndex) break;
      // 가장 작은 값을 가진 노드와 위치 교환
      [this.heap[currentIndex], this.heap[minIndex]] = [this.heap[minIndex], this.heap[currentIndex]];
      // 현재 위치 업데이트
      currentIndex = minIndex;
    }
    return min;
  }

  /** 힙의 크기 반환 */
  size() {
    return this.heap.length - 1;
  }

  /** 힙의 최소값 반환 */
  peek() {
    return this.heap[1];
  }
}

let N = -1;
const minHeap = new MinHeap();

rl.on("line", (line) => {
  // 첫번째 입력인 경우 N값 설정
  if (N === -1) {
    N = parseInt(line);
    return
  }

  // 각 줄의 입력을 공백으로 분리하여 처리
  line.split(" ").forEach((v) => {
    minHeap.push(parseInt(v));
    //힙의 크기가 N을 초과하면 최소값 제거
    if (minHeap.size() > N) minHeap.pop();
  });

  N--;
  if (N === 0) rl.close();
}).on("close", () => {
  console.log(minHeap.peek());
  process.exit();
});
