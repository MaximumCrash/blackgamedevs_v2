//** @jsx jsx */
import React, { useState, useEffect } from "react"

import Result from "@search/Result"
import Button from "@modules/ui/Button"
import { jsx, Grid } from "theme-ui"
import { AnimatePresence, motion } from "framer-motion"

const ResultsRenderer = ({ results, resultsPerPage = 9 }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const resultsToRender = results.slice(0, resultsPerPage * currentPage)

  useEffect(() => {
    if (currentPage !== 1) {
      setCurrentPage(1)
    }
  }, [results])

  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1
    },
  }

  const itemVariant = {
    hidden: { opacity: 0, y: 64, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1 },
  }

  return (
    <>
      <motion.ul
        variants={containerVariant}
        sx={{
          display: "grid",
          gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr 1fr"],
          gridGap: ["1rem", "2rem"],
          listStyleType: "none",
          p: 0,
          width: "calc(100%)",
        }}
        animate="show"
        initial="show"
      >
        {resultsToRender.map(({ id, ...otherProps }, index) => (
          <motion.li
            key={`result-obj-${id}-${index}`}
            variants={itemVariant}
          >
            <Result {...otherProps} />
          </motion.li>
        ))}
      </motion.ul>
      {results.length - resultsPerPage * currentPage > 0 && (
        <Button
          sx={{
            width: "100%",
            p: 2,
            fontSize: "18px",
            mt: 4,
            bg: "primary",
            color: "background",
            border: "none",
            fontWeight: "bold",
          }}
          noTap
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          {" "}
          {`Show more results (${
            results.length - resultsPerPage * currentPage
          }+)`}{" "}
        </Button>
      )}
    </>
  )
}

export default ResultsRenderer
