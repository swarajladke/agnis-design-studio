# Agnis Studio 

Agnis Studio is a real-time collaborative design tool, similar to Figma, built with Next.js, Fabric.js, and Liveblocks. It allows multiple users to design together in real-time on a shared canvas.

## 🚀 Features

-   **🎨 Real-time Collaboration:** Multiple users can design and see changes live.
-   **🖋️ Multi-tool Canvas:** Support for shapes (Rectangle, Circle, Triangle), freeform drawing, and text.
-   **🖼️ Image Upload:** Drag and drop or upload images directly onto the canvas.
-   **💬 Live Comments:** Add and reply to comments on specific design elements.
-   **🔄 Undo/Redo:** Full history support for all design actions.
-   **💾 Persistence:** Designs are automatically synced and saved using Liveblocks storage.
-   **🌓 Responsive Design:** Modern, sleek UI built with Tailwind CSS.
-   **📥 Export to PDF:** Export your designs to PDF for sharing.

## 🛠️ Tech Stack

-   **Frontend:** [Next.js 14](https://nextjs.org/)
-   **Canvas Engine:** [Fabric.js](http://fabricjs.com/)
-   **Real-time Engine:** [Liveblocks](https://liveblocks.io/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [Radix UI](https://www.radix-ui.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)

## 🏁 Getting Started

### Prerequisites

-   Node.js (LTS version)
-   npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd agnis-studio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Liveblocks public key:
   ```env
   NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_public_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📖 License

This project is licensed under the MIT License.
