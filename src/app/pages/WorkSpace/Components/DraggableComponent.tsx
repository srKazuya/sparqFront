import { useDrag, useDrop } from "react-dnd";
import { FC, ReactNode, useRef } from "react";
import { motion } from "framer-motion";

type DraggableComponentProps = {
    id: string;
    index: number;
    moveItem: (fromIndex: number, toIndex: number) => void;
    children: ReactNode;
};

const DraggableComponent: FC<DraggableComponentProps> = ({ id, index, moveItem, children }) => {
    const ref = useRef<HTMLDivElement>(null);

    const [, drop] = useDrop({
        accept: "component-instance",
        hover(item: { id: string; index: number }, monitor) {
            if (!ref.current) return;
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) return;

            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: "component-instance",
        item: { id, index },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    drag(drop(ref));

    return (
<motion.div
    ref={ref}
    layout
    layoutId={id}
    animate={{
        scale: isDragging ? 1.03 : 1,
        zIndex: isDragging ? 100 : 1,
    }}
    transition={{
        layout: {
            type: "tween",
            duration: 0.2,
            ease: "easeOut",
        },
        default: {
            duration: 0.2,
            ease: "easeOut",
        },
    }}
    style={{
        cursor: "grab",
        width: "100%",
        height: "100%",
        justifyItems:"center",
    }}
>
    {children}
</motion.div>

    );
};

export default DraggableComponent;
