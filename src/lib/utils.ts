import { generateBubbleSortAnimationArray } from "@/algorithms/bubbleSort";
import { generateInsertionSortAnimationArray } from "@/algorithms/insertionSort";
import { generateMergeSortAnimationArray } from "@/algorithms/mergeSort";
import { generateQuickSortAnimationArray } from "@/algorithms/quickSort";
import { generateSelectionSortAnimationArray } from "@/algorithms/selectionSort";
import { SortingAlgorithmType } from "./types";

export function generateRandomNumberFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const MNI_ANIMATION_SPEED = 50;
export const MAX_ANIMATION_SPEED = 400;

export const algorithmOptions = [
  { label: "Bubble", value: "bubble" },
  { label: "Quick", value: "quick" },
  { label: "Merge", value: "merge" },
  { label: "Insertion", value: "insertion" },
  { label: "Selection", value: "selection" },
];

export function generateAnimationArray(
  selectedAlgorithm: SortingAlgorithmType,
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: [number[], boolean][]) => void
) {
  switch (selectedAlgorithm) {
    case "bubble":
      generateBubbleSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "quick":
      generateQuickSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "merge":
      generateMergeSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "insertion":
      generateInsertionSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "selection":
      generateSelectionSortAnimationArray(isSorting, array, runAnimation);
      break;
    default:
      break;
  }
}

export const sortingAlgorithmsData = {
  bubble: {
    title: "Bubble Sort",
    description:
      "Bubble sort is a simple sorting algorithm that repeatedly steps through the input list, element by element, comparing the current element with the one after it, swapping their values if needed. The passes through the list are repeated until no swaps have to be performed during a pass, which means that the list has become fully sorted.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  insertion: {
    title: "Insertion Sort",
    description:
      "Insertion Sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It iterates through each element of the input list and compares it sequentially with elements in the sorted part of the list. It moves larger elements one position to the right until it finds the appropriate position for the current element, inserting it there.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  selection: {
    title: "Selection Sort",
    description:
      "Selection Sort is a straightforward sorting algorithm that repeatedly selects the smallest (or largest, depending on sorting order) unsorted element and swaps it with the element at the current position in the sorted portion of the list. This process continues until the entire list is sorted.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n²)",
  },
  merge: {
    title: "Merge Sort",
    description:
      "Merge Sort is a divide-and-conquer algorithm that divides the input array into two halves, recursively sorts each half, and then merges the sorted halves to produce a sorted array. It works by repeatedly dividing the array until each subdivision contains one element (trivially sorted), and then merging pairs of adjacent subdivisions while maintaining order.",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  quick: {
    title: "Quick Sort",
    description:
      "Quick Sort is a divide-and-conquer sorting algorithm that works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. It then recursively sorts the sub-arrays.",
    worstCase: "O(n²)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
};
