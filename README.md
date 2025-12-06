***Kanban Board***

A modern, interactive Kanban board built with Next.js, React, and dnd-kit for smooth drag-and-drop task management.
Styled using Figma-inspired designs and Tailwind CSS for a clean, responsive UI.

**🚀 Features**
✨ Drag-and-Drop: Seamlessly move tasks between columns using dnd-kit
📝 Add Tasks: Create new tasks in the To-do column with an intuitive input interface
❌ Delete Tasks: Remove tasks from any column with a single click
🎨 Responsive Design: Clean, modern styling powered by Tailwind CSS
🖼️ Custom Button Icons: Designed add button with hover & active states
👁️ Drag Preview: Live preview while dragging tasks across columns
♿ Accessible: Keyboard navigation + ARIA labels for improved accessibility

**🧰 Tech Stack**
Framework: Next.js 15 (React 19)
Styling: Tailwind CSS
Drag & Drop: @dnd-kit/core
Language: TypeScript
State Management: React Context API + Hooks
Design: Figma

📁 Project Structure
src/
  components/
  context/
  styles/
  app/
  ...

**🛠️ Getting Started**
Prerequisites
Node.js 18+
npm or yarn
Installation

Clone the repository:
git clone <repo-url>
cd <project-name>


Install dependencies:
npm install
# or
yarn install


Run the development server:
npm run dev
# or
yarn dev

Open your browser at http://localhost:3000

**🧱 Architecture**
Board State Management
Handled by the BoardProvider (React Context API):
tasks: Array of tasks (id, title, status)
moveTask: Move a task to a different column
addTask: Create a new task
deleteTask: Remove a task
Drag & Drop Flow
Board.tsx wraps the page with DndContext
Column.tsx uses useDroppable for drop zones
Task.tsx uses useDraggable for draggable task cards
PreviewDrag.tsx renders drag preview in DragOverlay
handleDragEnd updates task status after drop

**🎨 Customization**
Styling
Replace button icons in /public:
button.png, button-hover.png, button-press.png
Update Tailwind classes in component files
Global styles → globals.css
Column sizing → edit classNames in Column.tsx
Column Names
Edit titles & statuses in Board.tsx.

**📜 Available Scripts**
Standard Next.js scripts:
npm run dev — start dev server
npm run build — build for production
npm start — run production server

**🌐 Browser Support**
Compatible with modern browsers supporting:
ES2020 JavaScript
CSS Grid & Flexbox
Pointer Events API
🔮 Future Enhancements
💾 Task persistence (local storage or DB)
🔄 Undo/redo actions
🏷️ Task tags & categories
⏰ Due dates & reminders
👤 Author

Made by Kuail33 

Built with ❤️ using Next.js and dnd-kit.
